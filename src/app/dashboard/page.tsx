"use client"

import React, { useState } from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

const Page = () => {
 
  const [searchInput,setUserInput]=useState<string>();

  return (
    <div >
        {/* Search Section */}
         <SearchSection onSearchInput={(value:string)=>setUserInput(value)}/>
        {/** Template List */}

        <TemplateList searchInput={searchInput}/>
    </div>
  )
}

export default Page