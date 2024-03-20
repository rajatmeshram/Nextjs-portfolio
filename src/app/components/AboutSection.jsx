"use client";

import Image from "next/image";


const AboutSection = () => {
    
  
  return (
    <section className="text-white" id="about">
        <div className="gap-8 items-center py-8 px-4 xl:gap-0 md:grid md:grid-cols-2 sm:py-16 lg:px-0">
        <Image src="/images/about-image.png" width={600} height={500} alt="about" className="rounded"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">A few words about me</h2>
          <p className="text-white texxt-base md:text-lg">
          I am a Full Stack WordPress Developer having 6+ years of Experience. 
          My professional experience includes designing and implementing web pages, user interfaces 
          and plugins for WordPress, helping clients to troubleshoot and fix their WordPress products, 
          designing themes that are as functional as they are beautiful and working with a team of 
          colleagues to create the best products possible.
          </p>
          <div className="education mt-6">
            <p className="mr-3 font-semibold hover:text-white text-white ">Education:</p>
            <ul className="list-disc pl-2 py-2">
              <li>Master Of Computer Management</li>
              <li>Bachelor Of Engineering</li>
            </ul>

            <p className="mr-3 font-semibold hover:text-white text-white mt-5">Certifications:</p>
            <ul className="list-disc pl-2 py-2">
          <li>Php Web Devlopment</li>
          <li>Javascript Development</li>
        </ul>
          </div>
      
        </div>
        </div>
      
    </section>
  )
}

export default AboutSection
