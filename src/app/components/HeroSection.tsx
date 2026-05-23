/*
Landing page component that gets swapped out for subpage content
*/

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='mb-2 font-mono text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl'>
            <span className='text-[#00e58e]'>I'M HAVEN</span>
            <br />
            <span className='text-xl sm:text-xl md:text-2xl lg:text-3xl'>
              <TypeAnimation
                sequence={[
                  "BITEDOWN STUDIO CREATOR",
                  1000,
                  "GAME AND WEB DEVELOPER",
                  1000,
                  "UI / UX DESIGNER",
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className='lg:text-l sm:text-md mb-4 text-base text-[#ADB7BE]'>
            This is the homepage of both myself and my solo development studio
            called BiteDown. I'm expanding my skills into as many areas as I can
            because I believe broader skillsets are invaluable both as a solo
            dev and to industry. <br />
            <br /> That being said everyone needs something they're the best at
            and I've been flinging scripts in Unity and Unreal since grade 5 to
            realise the dream of creating my own games studio.
          </p>
        </div>
        <div className='col-span-5 mt-4 place-self-center lg:mt-0'>
          <div className='relative h-50 w-50 lg:h-100 lg:w-100'>
            <Image
              src='/images/nomai_mask.png'
              alt='hero image'
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
