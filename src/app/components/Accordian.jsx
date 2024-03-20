"use client"
import React, { useState } from 'react';
import Image from "next/image";
const Accordion = () => {

    return (
        <>
       

<div className="m-2 space-y-2">
<h1 className='text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>My Skills & Knowledge</h1>
  <div
    className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
    tabIndex="1"
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> PHP & Mysql Development </span>
      <Image
      src="/images/Chevron-icon-drop-down-menu-WHITE.png"
      className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      width={10}
      height={10}
      priority="true"
      
    />
      
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-fit group-focus:opacity-100 group-focus:duration-1000"
    >
      <p>I possess over 6 years of experience in 
      PHP development with a strong foundation in core PHP and advanced PHP concepts, 
      including object-oriented programming (OOP). Additionally, I am proficient in popular PHP 
      frameworks such as Laravel and ProcessWire. My expertise lies in crafting high-quality, 
      maintainable code that adheres to best practices.</p>
     <p> I possess comprehensive expertise in MySQL, including proficiency in crafting queries, 
      understanding table structures, establishing relationships, 
      executing joins, and handling complex queries.</p>
      <p className='pt-1'>My Expertise</p>
         <ul className="list-disc pl-2 py-2">
              <li>Core & Advance PHP</li>
              <li>OOPs Concepts</li>
              <li>Processwire CMS</li>
              <li>Laravel Framework</li>
              </ul>
    </div>
  </div>

  <div
    className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
    tabIndex="2"
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> Wordpress Customization </span>
       <Image
      src="/images/Chevron-icon-drop-down-menu-WHITE.png"
      className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      width={10}
      height={10}
      priority="true"
      
    />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-fit group-focus:opacity-100 group-focus:duration-1000"
    >
       <p>With 6+ years of experience in WordPress development, 
        I specialize in theme customization and have the capability to craft themes from scratch. 
        Additionally, I excel in plugin customization and possess the ability to develop plugins 
        from the ground up. </p>
        <p>My expertise extends to managing multisite and multilingual WordPress installations. 
        Furthermore, I am well-versed in integrating REST APIs and proficient in Gutenberg block development.Good Knowledge
        of Woocommerce develoment and customization,integration of payement gateway and multvendor site building.</p>
        <p className='pt-1'>My Expertise</p>
         <ul className="list-disc pl-2 py-2">
              <li>Theme Development</li>
              <li>Plugin Development</li>
              <li>Woocomerce Development</li>
              <li>Mulisite</li>
              <li>MuliLangual</li>
              
              
              </ul>
    </div>
  </div>

  <div
    className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
    tabIndex="3"
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> Javascript Development </span>
      <Image
      src="/images/Chevron-icon-drop-down-menu-WHITE.png"
      className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      width={10}
      height={10}
      priority="true"
      
    />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-fit group-focus:opacity-100 group-focus:duration-1000"
    >
       <p> I possess proficient knowledge of JavaScript and jQuery, complemented by 
        expertise in JavaScript frameworks like Next.js and React. With these tools, 
        I specialize in crafting single-page applications (SPAs) enriched with reusable 
        components and libraries. Moreover, I adeptly integrate diverse APIs to create dynamic 
        websites. Ensuring responsiveness across all devices, I adhere to web and mobile 
        standards meticulously. </p>
        <p>Furthermore, I excel in creating captivating and customized designs 
        while emphasizing code efficiency and minimizing redundancy. My dedication to staying updated 
        with emerging technologies allows me to continually enhance my skills and deliver innovative solutions 
        to meet evolving industry demands.</p>
        <p className='pt-1'>My Expertise</p>
         <ul className="list-disc pl-2 py-2">
              <li>Next Js</li>
              <li>React Js</li>
              <li>Redux</li>
              
              
              </ul>
    </div>
  </div>
</div>
    </>
    );
};

export default Accordion;
