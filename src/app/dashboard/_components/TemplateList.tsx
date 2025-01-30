'use client';

import Template from '@/app/(data)/Template';
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import Link from 'next/link';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateListProps {
  searchInput?: string; // Optional prop
}

const TemplateList: React.FC<TemplateListProps> = ({ searchInput = '' }) => {
  const [tempList, setTempList] = useState(Template); // Initial state with full list

  useEffect(() => {
    const normalizedSearchInput = searchInput.toLowerCase(); // Normalize search input
    const filteredData = Template.filter((item) =>
      item.name?.toLowerCase().includes(normalizedSearchInput)
    );

    // If no search input, reset to the full list
    setTempList(normalizedSearchInput ? filteredData : Template);
  }, [searchInput]);

  return (
   
   <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 p-10">
      {tempList.map((item: TEMPLATE) => (
        <TemplateCard {...item} key={item.slug} />
      ))}
    </div>
  );
};

export default TemplateList;
