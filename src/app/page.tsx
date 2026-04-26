"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";

export default function Home() {
  const currentYear = new Date().getFullYear();
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
            ? "card group align-start relative col-span-1 row-span-4 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-7 lg:col-span-1"
            : "hidden"
        }
      >
        <AboutSection />
      </div>

      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-1 lg:col-span-1 lg:row-span-1"
            : "card align-start relative col-span-1 row-span-8 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 sm:p-4 md:col-span-3 md:row-span-8 md:p-6 lg:col-span-4"
        }
      >
        <button
          onClick={() => setIsHidden(!isHidden)}
          className={
            isHidden
              ? "h-full w-full bg-[#1b1b1b] p-6 text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:text-[#00e58e]"
              : "group hover:[#00e58e] mr-4 mb-4 w-full rounded-lg border border-[#414141] bg-[#353535] px-8 py-3 font-bold text-white hover:border-[#e52525] hover:text-[#e52525] sm:w-fit"
          }
        >
          <div className='flex items-center justify-between'>
            <div className='z-20 m-0'>
              {isHidden ? "View Projects" : "Return"}
            </div>
            <svg
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              id='mdi-arrow-top-right'
              viewBox='0 0 24 24'
              width='1em'
              height='1em'
              className={
                isHidden
                  ? "z-20 float-right h-6 transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#00e58e]"
                  : "z-20 float-right h-6 transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#e52525]"
              }
            >
              <path d='M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z' />
            </svg>
          </div>
        </button>

        <div className={isHidden ? "hidden" : "visible"}>
          <ProjectsSection />
        </div>
      </div>

      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-1 lg:col-span-1"
            : "hidden"
        }
      >
        <div className='flex w-full items-start justify-between'>
          <div className='-mt-1 text-xl font-bold'>Currently</div>
          <div className='relative flex h-3.5 w-3.5'>
            <div className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e58e] opacity-75'></div>
            <div className='absolute inline-flex h-full w-full rounded-full bg-[#00e58e]'></div>
          </div>
        </div>
        <div className='flex w-full items-start justify-between'>
          <div className='text-sm'>Looking for work</div>
          <div className='text-sm text-[#555555]'>27/04/2026</div>
        </div>
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
            ? "card group align-start relative col-span-1 h-100 w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] transition-all duration-300 ease-out hover:border-[#00e58e] sm:h-100 md:col-span-3 md:h-100 lg:col-span-2 lg:row-span-3 lg:h-auto"
            : "hidden"
        }
      >
        <div className='pointer-events-none absolute z-100 col-span-1 w-full justify-center rounded-br-lg bg-linear-to-b from-[#1b1b1b]/90 via-[#1b1b1b]/90 to-transparent px-6 pt-4 pb-16 text-xl text-white'>
          You can find me in the Geelong and Melbourne area
        </div>
        <MapSection />
      </div>

      <div
        className={
          isHidden
            ? "card group align-start relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-1 lg:col-span-1"
            : "hidden"
        }
      >
        © {currentYear} Developed using{" "}
        <a className='text-[#00e58e]' href='https://nextjs.org'>
          Next.js
        </a>{" "}
        by Me.
      </div>
    </main>
  );
}
