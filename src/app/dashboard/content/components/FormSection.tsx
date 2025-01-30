'use client'

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateList'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';



interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {

  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })



  }


  const onClick = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>


      {/** @ts-ignore */}

      {selectedTemplate?.icon && (
        <Image
          src={selectedTemplate.icon}
          alt="icon"
          height={70}
          width={70}
        />
      )}
      <h2 className='font-bold text-2xl text-primary text-pr mb-2'>{selectedTemplate?.name}</h2>
      <p className='text-gray-600 text-sm'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onClick}>

        {selectedTemplate?.form?.map((item ,index) => (

          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold'>{item.label}</label>
            {item.field == 'input' ?
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
              : item.field == 'textarea' ?
                <Textarea name={item.name} required={item?.required} onChange={handleInputChange} /> : null


            }
          </div>

        ))}

        <Button type='submit' className='w-full py-6' disabled={loading}> {loading && <Loader2Icon className='animate-spin' />} Generate Content</Button>

      </form>
    </div>
  )
}

export default FormSection