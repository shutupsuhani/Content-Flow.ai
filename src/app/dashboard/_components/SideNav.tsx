"use client"

import { Coins, FileClock, History, Home, Settings, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

const SideNav= () => {

  const menuList=[
    {
     name:'Home',
     icon:Home,
     path:'/dashboard'
   },

   {
    name:'History',
    icon:FileClock,
    path:'/dashboard/history'
  },

  {
    name:'Billing',
    icon:WalletCards,
    path:'/dashboard/billing'
  },

  {
    name:'Settings',
    icon:Settings,
    path:'/dashboard/setting'
  },
   

]


 const pathname=usePathname();

 useEffect(()=>{
    console.log(pathname)
 })

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center shadow-sm border-b pb-4'>
           <Link href={'/'}> <img src='/lg.svg' width={50} height={50}/> </Link>
        </div>

        <hr className='my-0 border'/>

        <div className='mt-6 items-center'>
            {menuList.map((menu,index)=>(

               <div key={index}>
                <Link href={menu.path}><div key={index} className={`flex cursor-pointer gap-2 mb-2 mt-5 p-3 items-center shadow-sm hover:bg-primary hover:text-white rounded-lg ${pathname==menu.path&&'bg-primary text-white'}`}>
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div></Link>
               </div>
               
            ))}
        </div>
         
         <div className='w-full rounded-lg'>
          <UsageTrack/>
         </div>

    </div>
  )
}

export default SideNav