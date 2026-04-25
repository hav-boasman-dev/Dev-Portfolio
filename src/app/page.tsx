"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  const hideStates = {
    hidden: { width: 0 },
    active: { width: "calc(100% - 0.75rem" },
  };

  return (
    <main className='relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 text-white sm:gap-2 sm:p-4 md:grid-cols-3 md:gap-3 md:p-6 lg:h-screen lg:grid-cols-4 lg:grid-rows-8 lg:gap-4'>
      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-4 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3"
            : "hidden"
        }
      >
        <HeroSection />
      </div>

      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-4 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-8 lg:col-span-1"
            : "hidden"
        }
      >
        <AboutSection />
      </div>

      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-4 lg:col-span-1"
            : "hidden"
        }
      >
        <ContactSection />
      </div>

      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] transition-all duration-300 ease-out hover:border-white md:col-span-3 md:row-span-1 lg:col-span-1 lg:row-span-1"
            : "card group align-start relative col-span-1 row-span-8 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out sm:p-4 md:col-span-3 md:row-span-8 md:p-6 lg:col-span-4"
        }
      >
        <button
          onClick={() => setIsHidden(!isHidden)}
          className={
            isHidden
              ? "h-full w-full rounded-lg bg-linear-to-br from-[#00e58e] to-green-500 text-2xl font-bold text-black hover:bg-slate-200"
              : "mr-4 mb-4 w-full rounded-lg bg-linear-to-br from-[#00e58e] to-green-500 px-6 py-3 font-bold text-black hover:bg-slate-200 sm:w-fit"
          }
        >
          {isHidden ? "VIEW PROJECTS" : "RETURN"}
        </button>

        <div className={isHidden ? "hidden" : "visible"}>
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}
