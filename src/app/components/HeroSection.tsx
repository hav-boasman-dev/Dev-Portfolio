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
          <h1 className='mb-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl'>
            <span className='bg-linear-to-r from-[#00e58e] to-green-500 bg-clip-text text-transparent'>
              Hello, I'm Haven
            </span>
            <br />
            <span className='text-1xl text-nowrap sm:text-2xl lg:text-3xl'>
              I'm A{" "}
              <TypeAnimation
                sequence={[
                  "Games Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Backend Specialist",
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />{" "}
            </span>
          </h1>
          <p className='mb-4 text-base text-[#ADB7BE] sm:text-lg lg:text-xl'>
            Placeholder text Placeholder text Placeholder text Placeholder text
            Placeholder text Placeholder text Placeholder text
          </p>
          <div>
            <button className='mr-4 mb-4 w-full rounded-full bg-linear-to-br from-[#00e58e] to-green-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit'>
              Hire Me
            </button>
            <button className='mr-4 w-full rounded-full bg-linear-to-br from-[#00e58e] to-green-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit'>
              <span className='block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 place-self-center lg:mt-0'>
          <div className='relative h-50 w-50 lg:h-100 lg:w-100'>
            <Image
              src='/images/FRANK.png'
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
