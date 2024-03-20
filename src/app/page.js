"use client"
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSEction from "./components/EmailSEction";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skills from "./components/Skills";
import Accordion from "./components/Accordian";
import { useEffect, useState } from 'react';
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change the breakpoint as per your requirements
    };
    handleResize(); // Call once on initial render to set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto py-4 px-12">
      <Navbar />
       <div className="container mx-auto mt-24 px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          
          {isMobile ?  <Accordion /> : <Skills />}
         
          <ProjectSection />
          <EmailSEction />
      </div>
      <Footer />
    </main>
  );
}
