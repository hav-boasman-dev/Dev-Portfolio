"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import PressKit from "./components/PressKit";
import ArrowSvg from "./components/ArrowSvg";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [projectsOpen, setprojectsOpen] = useState(true);
  const [pressKitOpen, setpressKitOpen] = useState(true);

  return (
    /*----------------------------------------------------------------------------------------------
    Main Section Container
    This Container holds the main grid that all other components fit within. It scales and adjusts
    the column and row count based on screen size.
    ----------------------------------------------------------------------------------------------*/
    <main className='flex flex-col sm:flex-col md:flex-row lg:flex-row'>
      {/*---------------------------------------------------------------------------------------------- 
        Ticker container
        This ticker is isolated into its own grid so that it can scale independently
        There is a copy on the other side of the grid at the bottom of the code.
        ----------------------------------------------------------------------------------------------*/}
      <div className='relative grid h-25 w-full grid-cols-1 grid-rows-1 overflow-hidden pt-6 pr-5 pb-0 pl-5 text-white sm:h-25 sm:w-full sm:pr-5 md:h-screen md:w-25 md:pr-0 md:pb-6 lg:h-screen lg:w-25 lg:pr-0 lg:pb-6'>
        <div className='col-span-1 flex overflow-hidden bg-[#00e580] md:col-span-1'>
          <div className='pt-4 pl-0 sm:pt-4 sm:pl-0 md:pt-0 md:pl-8 lg:pt-0 lg:pl-10'>
            <div className='animate-ticker-top sm:animate-ticker-top md:animate-ticker-side lg:animate-ticker-sideflex shrink-0 origin-left font-mono text-4xl font-bold whitespace-nowrap text-black md:rotate-90 lg:rotate-90'>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------------------------------------------------------------------------------- 
        Main grid container
        This section contains a grid that places all the content on the page
        With small screen sizes it drops to using only one column and sets row size to fit the content.
        ----------------------------------------------------------------------------------------------*/}
      <div className='relative grid w-full max-w-6xl grid-cols-2 overflow-hidden px-5 py-0 text-white sm:px-5 sm:py-0 md:grid-cols-3 md:px-0 md:py-6 lg:h-screen lg:grid-cols-4 lg:grid-rows-8 lg:px-0 lg:py-6'>
        {/*---------------------------------------------------------------------------------------------- 
        Hero Section Container 
        Contains a typing animation that moves through each of the titles i place myself under, a short
        hook section to interest people and my personal studio logo.
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-start relative col-span-2 row-span-4 block h-full w-full transform justify-start overflow-hidden border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 ${!projectsOpen && "hidden"} ${!pressKitOpen && "hidden"}`}
        >
          <HeroSection />
        </div>

        {/*---------------------------------------------------------------------------------------------- 
        About Section Container 
        This section has a short 'about me' and two tabs that contain info about my skills and education.
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-start relative col-span-2 row-span-4 block h-full w-full transform justify-start overflow-hidden border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-7 lg:col-span-1 ${!projectsOpen && "hidden"} ${!pressKitOpen && "hidden"}`}
        >
          <AboutSection />
        </div>

        {/*---------------------------------------------------------------------------------------------- 
        Projects Container 
        Toggles the visibility of all other sections off while toggling the ProjectsSection component to
        visible. This creates the illusion of swapping pages without a reload or url change.
  
        Within the ProjectsSection component, There is a small gallery of containers that show an image 
        of the project with a short description and a project title. Hovering over the image fades it and
        presents two buttons. One takes you to the github repository and the other one expands the
        project to view more information on it.
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-start relative col-span-1 row-span-2 block h-full w-full transform justify-start overflow-hidden border border-[#00e58e] bg-[#1b1b1b] ease-out md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1 ${!projectsOpen && "card align-start relative col-span-2 row-span-8 block h-full w-full transform justify-start overflow-hidden border border-[#414141] bg-[#1b1b1b] md:col-span-3 md:row-span-8 lg:col-span-4 lg:row-span-8"} ${!pressKitOpen && "hidden"}`}
        >
          <button
            onClick={() => {
              setprojectsOpen(!projectsOpen);
              window.scrollTo(0, 0);
            }}
            className={
              projectsOpen
                ? "h-full w-full bg-[#00e58e] p-6 text-base font-bold text-black transition-colors duration-200 ease-in-out hover:bg-[#1b1b1b] hover:text-[#00e58e] sm:text-lg md:text-xl lg:text-xl"
                : "group/button hover:[#00e58e] w-65 border border-[#F92A53] bg-[#F92A53] px-8 py-3 font-bold text-black transition-colors duration-200 ease-in-out hover:bg-[#1b1b1b] hover:text-[#e52525]"
            }
          >
            <div className={`flex items-center justify-between text-3xl`}>
              <div className='z-20 font-mono'>
                {projectsOpen ? "PROJECTS" : "RETURN"}
              </div>
              <div
                className={
                  projectsOpen
                    ? "z-20 float-right -mt-2 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1.5 group-hover:text-[#00e58e]"
                    : "z-20 float-right -mt-2 h-5 transition-transform duration-200 ease-in-out group-hover/button:translate-x-1.5 group-hover/button:text-[#e52525]"
                }
              >
                <ArrowSvg />
              </div>
            </div>
          </button>

          <div className={projectsOpen ? "hidden" : "visible"}>
            <ProjectsSection />
          </div>
        </div>

        {/*---------------------------------------------------------------------------------------------- 
        Currently Section Container 
        Contains a single dated log of what I am currently up to
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-items-center col-span-1 row-span-1 flex h-full w-full transform flex-col justify-center overflow-hidden border border-[#414141] bg-[#1b1b1b] p-6 align-middle transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-1 md:row-span-1 lg:col-span-1 ${!projectsOpen && "hidden"} ${!pressKitOpen && "hidden"}`}
        >
          <div className='flex w-full justify-between'>
            <div className='-mt-1 block font-mono text-xl font-bold'>
              CURRENTLY
            </div>
            <div className='relative flex h-3.5 w-3.5'>
              <div className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e58e] opacity-75'></div>
              <div className='absolute inline-flex h-full w-full rounded-full bg-[#00e58e]'></div>
            </div>
          </div>

          <div className='flex w-full justify-between'>
            <div className='block text-sm'>Looking for work</div>
            <div className='block text-sm font-bold text-[#555555]'>
              24/05/2026
            </div>
          </div>
          <div />
        </div>

        {/*---------------------------------------------------------------------------------------------- 
        Contact Section Container 
        Contains external social links, download button for CV, and download button for press kit
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-start relative col-span-2 row-span-2 block h-full w-full transform justify-start overflow-hidden border border-[#414141] bg-[#1b1b1b] transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-3 lg:col-span-1 ${!projectsOpen && "hidden"} ${!pressKitOpen && "hidden"}`}
        >
          <ContactSection />
        </div>

        {/*---------------------------------------------------------------------------------------------- 
        Map Insert Container 
        Utilises a simple iFrame to show a map view of the general area i live and work in. 
        (Originally utilised a map API but the added benefits were irrelevant for the usecase)
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-start relative col-span-2 block h-100 w-full transform justify-start overflow-hidden border border-[#414141] bg-[#1b1b1b] transition-all duration-300 ease-out hover:border-[#00e58e] sm:h-100 md:col-span-3 md:h-100 lg:col-span-2 lg:row-span-3 lg:h-auto ${!projectsOpen && "hidden"} ${!pressKitOpen && "hidden"}`}
        >
          <div className='pointer-events-none absolute z-100 col-span-1 w-full justify-center bg-linear-to-b from-[#1b1b1b]/90 via-[#1b1b1b]/90 to-transparent px-6 pt-4 pb-16 text-xl text-white'>
            You can find me in the Geelong and Melbourne area
          </div>
          <MapSection />
        </div>

        {/*----------------------------------------------------------------------------------------------
        Press Kit Container
        Toggles the visibility of all other sections off while toggling the PressKit component to
        visible. This creates the illusion of swapping pages without a reload or url change.
  
        Within the PressKit component, There is a short and long biography, my story, images of the
        projects i've worked on and a description to match them.
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group align-start relative col-span-1 row-span-2 block h-full w-full transform justify-start overflow-hidden border border-[#00e58e] bg-[#1b1b1b] ease-out md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1 ${!pressKitOpen && "absolute col-span-2 row-span-8 flex w-full flex-col justify-start overflow-hidden border border-[#414141] bg-[#1b1b1b] md:col-span-3 md:row-span-8 lg:col-span-4 lg:row-span-8"} ${!projectsOpen && "hidden"}`}
        >
          <button
            onClick={() => {
              setpressKitOpen(!pressKitOpen);
              window.scrollTo(0, 0);
            }}
            className={
              pressKitOpen
                ? "h-full w-full bg-[#00e58e] p-6 text-base font-bold text-black transition-colors duration-200 ease-in-out hover:bg-[#1b1b1b] hover:text-[#00e58e] sm:text-lg md:text-xl lg:text-xl"
                : "group/button hover:[#00e58e] w-65 border border-[#F92A53] bg-[#F92A53] px-8 py-3 font-bold text-black transition-colors duration-200 ease-in-out hover:bg-[#1b1b1b] hover:text-[#e52525]"
            }
          >
            <div className={`flex items-center justify-between text-3xl`}>
              <div className='z-20 font-mono'>
                {pressKitOpen ? "PRESS KIT" : "RETURN"}
              </div>
              <div
                className={
                  pressKitOpen
                    ? "z-20 float-right -mt-2 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1.5 group-hover:text-[#00e58e]"
                    : "z-20 float-right -mt-2 h-5 transition-transform duration-200 ease-in-out group-hover/button:translate-x-1.5 group-hover/button:text-[#e52525]"
                }
              >
                <ArrowSvg />
              </div>
            </div>
          </button>

          <div
            className={
              pressKitOpen
                ? "hidden"
                : "visible grid h-full w-full auto-rows-min grid-rows-1 flex-col"
            }
          >
            <PressKit />
          </div>
        </div>

        {/*----------------------------------------------------------------------------------------------
        Copyright Container 
        Contains link to framework and utilises current year to update copyright
        ----------------------------------------------------------------------------------------------*/}
        <div
          className={`card group relative col-span-1 row-span-1 flex h-full w-full transform flex-col justify-center overflow-hidden border border-[#414141] bg-[#1b1b1b] p-6 align-middle transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-1 md:row-span-1 lg:col-span-1 ${!projectsOpen && "hidden"} ${!pressKitOpen && "hidden"}`}
        >
          <div className='block'>
            © {currentYear} Developed using{" "}
            <a className='text-[#00e58e]' href='https://nextjs.org'>
              Next.js
            </a>{" "}
            by Me.
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------------------------------------------
        Second Ticker Container
        This is a copy of the ticker container from the top of this code.
        ----------------------------------------------------------------------------------------------*/}
      <div className='relative grid h-25 w-full grid-cols-1 grid-rows-1 overflow-hidden pt-0 pr-5 pb-6 pl-5 text-white sm:h-25 sm:w-full sm:pr-5 md:h-screen md:w-25 md:pt-6 md:pl-0 lg:h-screen lg:w-25 lg:pt-6 lg:pl-0'>
        <div className='col-span-1 flex overflow-hidden bg-[#00e580] md:col-span-1'>
          <div className='pt-4 pl-0 sm:pt-4 sm:pl-0 md:pt-0 md:pl-8 lg:pt-0 lg:pl-10'>
            <div className='animate-ticker-top sm:animate-ticker-top md:animate-ticker-side lg:animate-ticker-sideflex shrink-0 origin-left font-mono text-4xl font-bold whitespace-nowrap text-black md:rotate-90 lg:rotate-90'>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
              <span className='shrink-0 whitespace-pre'>
                {"BITEDOWN_STUDIO   //   "}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
