"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from './TabButton';
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Wordpress</li>
          <li>PHP</li>
          <li>MYSQL</li>
          <li>Nextjs</li>
          <li>Nodejs</li>
          <li>Shopify</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Master Of Computer Management</li>
          <li>Bachelor Of Engineering</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  
  return (
    <section className="text-white" id="about">
        <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">A few words about me</h2>
          <p className="text-white texxt-base md:text-lg">
          I am a Full Stack WordPress Developer having 6+ years of Experience. 
          My professional experience includes designing and implementing web pages, user interfaces 
          and plugins for WordPress, helping clients to troubleshoot and fix their WordPress products, 
          designing themes that are as functional as they are beautiful and working with a team of 
          colleagues to create the best products possible.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        </div>
      
    </section>
  )
}

export default AboutSection
