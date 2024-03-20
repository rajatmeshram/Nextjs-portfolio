import React from 'react'
import VerticalTabs from './VerticalTabs';
import Image from "next/image";
const tabs = [
    {
      title: 'PHP & Mysql Development',
      img:<Image
      src="/images/icons8-php.png"
      width={30}
      height={30}
      priority="true"
      
    />,
      content: <div className='text-white  text-base md:text-lg text-justify'>
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
      </div>,
    },
    {
      title: 'Wordpress Customization',
      img:<Image
      src="/images/wordpress.png"
      width={30}
      height={30}
      priority="true"
      
    />,
      content: <div className='text-white text-base md:text-lg text-justify'>
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
      </div>,
    },
    {
      title: 'Javascript Development',
      img:<Image
      src="/images/icons8-node-js-64.png"
      width={30}
      height={30}
      priority="true"
      
    />,
      content: <div className='text-white text-base md:text-lg text-justify'>
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
      </div>,
    },
    {
        title: 'Server Deployment',
        img:<Image
        src="/images/icons8-amazon.png"
        width={30}
        height={30}
        priority="true"
        
      />,
        content: <div className='text-white text-base md:text-lg text-justify'>
         <p>I am proficient in server deployments, including AWS server management, 
         instance creation tailored to project needs, integration of S3 and other services, 
         and deploying diverse tech stack projects in the AWS environment.</p>
         <p>I also possess knowledge of other hosting servers and deployment using cPanel.</p>
         
         <p>I have a strong understanding of Git versioning, GitHub CI/CD pipelines, 
         and maintaining code using GitHub Actions.</p>
         <p className='pt-1'>My Expertise</p>
         <ul className="list-disc pl-2 py-2">
              <li>EC2</li>
              <li>S3 Bucket</li>
              <li>Route 53</li>
              <li>Load Balancer</li>
              <li>Auto Scaling</li>
              
              </ul>
        </div>,
      },
      {
        title: 'Shopify Deployment',
        img:<Image
        src="/images/icons8-shopify-48.png"
        width={30}
        height={30}
        priority="true"
        
      />,
        content: <div className='text-white text-base md:text-lg text-justify'>
         <p>Welcome to my corner of Shopify development expertise. I'm deeply passionate about crafting 
          outstanding e-commerce solutions that resonate with your brand and captivate your audience. 
          With a keen eye for detail and a commitment to excellence, I strive to elevate your online presence 
          and drive your business forward.</p>
         <p className='pt-1'>My Expertise</p>
         <ul className="list-disc pl-2 py-2">
              <li>Shopify Specialization: I specialize in leveraging Shopify's powerful platform to create immersive online stores that leave a lasting impression on your customers.</li>
              <li>Custom Solutions: From bespoke theme design to seamless app integration, I'm dedicated to bringing your unique vision to life while ensuring a flawless user experience.</li>
              <li>Performance Optimization: I prioritize optimizing your store's performance to enhance speed, usability, and conversion rates, maximizing your online potential.</li>
              </ul>
        </div>,
      },
  ];
const Skills = () => {
    
  return (
    <>
     <div className='py-10'>
      <h1 className='text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>My Skills & Knowledge</h1>
      <VerticalTabs tabs={tabs} />
    </div>

   </>
  )
}

export default Skills
