import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";


function layout({
    children,
  }: {
    children: React.ReactNode
  }){
   return (
         
    
      <div className="bg-slate-100 h-screen">
        
        
        <div className="w-64 hidden md:block fixed">
        <SideNav/>
      </div>

      <div className="md:ml-64">
        <Header/>
      {children}
      </div>
        
        
        
        </div>

   );
}
export default layout;
