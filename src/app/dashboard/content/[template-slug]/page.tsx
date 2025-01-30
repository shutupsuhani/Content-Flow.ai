'use client';

import React, { useState, useEffect } from 'react';
import FormSection from '../components/FormSection';
import OutputSection from '../components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateList';
import Template from '@/app/(data)/Template';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '../../../../../utils/AiModal';
import { db } from '../../../../../utils/db';
import { AIOutput } from '../../../../../utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

interface PROPS {
  params: Promise<{
    'template-slug': string;
  }>;
}

const Page: React.FC<PROPS> = ({ params }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>('');
  const { isLoaded, user } = useUser();

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      const resolvedTemplate = Template?.find(
        (item) => item.slug === resolvedParams['template-slug']
      );
      setSelectedTemplate(resolvedTemplate);
    };

    resolveParams();
  }, [params]);

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);

    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + ',' + selectedPrompt;

    try {
      const result = await chatSession.sendMessage(finalAIPrompt);
      const responseText = await result.response.text();
      setAIOutput(responseText);
      await saveIndb(formData, selectedTemplate?.slug, responseText);
    } catch (error) {
      console.error('Error generating AI content:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveIndb = async (formData: any, slug: string | undefined, aiResp: string) => {
    if (!isLoaded || !user) {
      console.error('User data is not available.');
      return;
    }

    try {
      // Converting formData to string to match the schema
      const serializedFormData = JSON.stringify(formData);

      const result = await db.insert(AIOutput).values({
        formData: serializedFormData, // Serialize formData if it's not directly compatible with the schema
        templateSlug: slug || '', // Fallback to an empty string if slug is undefined
        aiResponse: aiResp,
        createdBy: user.primaryEmailAddress?.emailAddress || 'Anonymous',
        createdAt: moment().toISOString(), // Use ISO 8601 format for createdAt
      });

      console.log('Database save result:', result);
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/** Form Section */}
        <div>
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
            loading={loading}
          />
        </div>

        {/** Text Editor Section */}
        <div className="md:col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default Page;
