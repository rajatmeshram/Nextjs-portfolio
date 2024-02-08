import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSEction from "./components/EmailSEction";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto py-4 px-12">
      <Navbar />
       <div className="container mx-auto mt-24 px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectSection />
          <EmailSEction />
      </div>
      <Footer />
    </main>
  );
}
