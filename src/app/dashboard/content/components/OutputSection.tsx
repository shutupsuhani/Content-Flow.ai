'use client';

import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle } from 'lucide-react'; // Import CheckCircle icon for success

// Dynamically import the Editor to disable SSR
const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), { ssr: false });

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef: any = useRef();
  const [copySuccess, setCopySuccess] = useState<boolean>(false); // State to track if copy is successful

  // Set the markdown content when the component mounts or when aiOutput changes
  useEffect(() => {
    if (editorRef.current) {
      const instance = editorRef.current.getInstance();
      instance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  // Copy the content from the editor to clipboard
  const copyToClipboard = () => {
    if (editorRef.current) {
      const markdownContent = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(markdownContent).then(() => {
        setCopySuccess(true);  // Change icon to success
        setTimeout(() => setCopySuccess(false), 2000);  // Revert icon back after 2 seconds
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center text-center p-5 justify-between">
        <h2 className="font-medium text-lg">Result</h2>
        <Button className="flex gap-2 items-center" onClick={copyToClipboard}>
          {copySuccess ? (
            <CheckCircle height={16} width={16} className="text-green-500" /> // Success icon
          ) : (
            <Copy height={16} width={16} /> // Default copy icon
          )}
          {copySuccess ? 'Copied' : 'Copy'}
        </Button>
      </div>

      {/* Toast UI Editor */}
      <Editor
        ref={editorRef}
        initialValue="Your Result will Appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;
