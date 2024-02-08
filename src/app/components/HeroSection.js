"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Rajat",
              1000,
              "Wordpress Developer",
              1000,
              "Backend Developer",
              1000,
              "Full Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
        I am a Full Stack WordPress Developer having 6+ years of Experience.
        </p>
        <div>
        <Link href="/" >
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          </Link>
          <Link href="https://rajatmeshram.in/" >
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
          </Link>
        </div>
      </div>

    
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/ra2.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={400}
            height={400}
            priority="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;