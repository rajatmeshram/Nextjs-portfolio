"use client"
import React from 'react'
import Image from "next/image";
import { useState } from 'react';

const VerticalTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  return (
    <div className="vertical-tabs lg:flex sm:block  ">
    <div className="tab-list lg:w-2/5 sm:w-full sm:pb-6">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`flex justify-start gap-3 items-center border border-t-0 border-r-0 border-l-0 border-b-[#33353F] tab py-5 ${activeTab === index ? 'active rounded-md shadow py-5 ' : ''}`}
          onClick={() => handleTabClick(index)}
        >
         {tab.img} <span className={`font-bold lg:text-2xl sm:text-xs leading-5 text-transparent  bg-clip-text ${activeTab === index ? 'bg-gradient-to-r from-purple-400 to-pink-600  ' : 'text-white'}`}>{tab.title}</span>
        </div>
      ))}
    </div>
    <div className="tab-content lg:w-3/5 lg:px-6 sm:w-full sm:mt-5 sm:px-0">
      {tabs[activeTab].content}
    </div>
  </div>
  )
}

export default VerticalTabs
