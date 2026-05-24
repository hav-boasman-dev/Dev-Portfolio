import React from "react";
import Image from "next/image";
import ArrowSvg from "./ArrowSvg";

const PressKit = () => {
  return (
    <div className='h-full overflow-hidden sm:h-full sm:overflow-hidden md:h-full md:overflow-y-scroll lg:h-full lg:overflow-y-scroll [&::-webkit-scrollbar]:w-0'>
      <div className='mt-8 mb-4 text-center font-mono text-4xl font-bold text-[#00e58e]'>
        BITEDOWN STUDIO <span className='text-white'>| PRESS KIT</span>
      </div>
      <div className='relative grid h-full w-full auto-rows-auto grid-cols-4 gap-4 p-6 sm:gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5 lg:gap-10'>
        {/*---------------------------------------------------------------------------------------------- 
        Studio Section
        ----------------------------------------------------------------------------------------------*/}
        <div className='col-span-1 row-span-1 flex h-fit flex-col items-center justify-between align-middle'>
          <Image
            src='/images/PressKit/BiteDownStudio_Clear@2x.png'
            alt='bitedown studio logo'
            className='flex'
            width={320}
            height={320}
          />
          <Image
            src='/images/PressKit/BiteDownStudio_TextGreen@2x.png'
            alt='bitedown studio logo'
            className='flex py-6'
            width={320}
            height={320}
          />
          <button className='flex h-full w-full'>
            <a
              className='flex hover:text-[#00e58e]'
              href='/publicfiles/BiteDown_Studio_Branding_v1.zip'
              download='BiteDownStudioBranding'
            >
              Download all branding as .zip ↓
            </a>
          </button>
        </div>
        <div className='col-span-3 row-span-1 flex h-full w-full flex-col text-base sm:text-base md:col-span-3 md:text-lg lg:col-span-4 lg:text-xl'>
          <div className='text-xl text-[#00e58e] sm:text-xl md:text-2xl lg:text-3xl'>
            BiteDown Studio Description
          </div>
          <div>
            Bitedown studio is a game studio focused on bringing a bold and
            unyielding style that subverts modern corporate standards and steps
            away from the mainline trends that populate the gaming space today.
            <br /> The studio's goal is to join/support the modern movement
            towards Indie Games that dont hold back on their character and
            embrace the charm of singleplayer experiences with no focus on
            live-service or monetisation. <br /> The studio also has a focus on
            supporting developers, designers and artists who are disadvantaged
            or discriminated against by offerring inter-disciplinary roles and
            opportunities.
            <br />
          </div>
        </div>

        {/*---------------------------------------------------------------------------------------------- 
        Personal section
        ----------------------------------------------------------------------------------------------*/}
        <div className='relative col-span-1 row-span-1 h-full lg:h-40'>
          <Image
            src='/images/PressKit/BoxMargin.jpg'
            alt='photo of studio creators'
            className='mb-2 flex border-2 border-[#00e580]'
            width={320}
            height={320}
          />
          <button className=''>
            <a
              className='block hover:text-[#00e58e]'
              href='/publicfiles/BiteDown_Studio_Branding_v1.zip'
              download='BiteDownStudioBranding'
            >
              Download all live photos as .zip ↓
            </a>
          </button>
        </div>
        <div className='col-span-3 row-span-1 flex h-full w-full flex-col text-base sm:text-base md:col-span-3 md:text-lg lg:col-span-4 lg:text-xl'>
          <div className='text-xl text-[#00e58e] sm:text-xl md:text-2xl lg:text-3xl'>
            Our Story
          </div>
          <div>
            BiteDown Studio was formed as a name to put my own projects under
            while I studied and looked for stable work but over time my partner
            began helping with voice acting, concept development, and
            world-building within projects. I decided to officially add them as
            the second member of BiteDown in 2026 and since then I've wanted to
            try and grow the studio into something more than just a personal
            passion project.
            <br />
            While it may be years before it gets off the ground I'm hoping to
            expand the studio with more junior artists, developers and designers
            from many different disciplines.
          </div>
        </div>
        {/*---------------------------------------------------------------------------------------------- 
        The Longest Dungeon Section
        ----------------------------------------------------------------------------------------------*/}
        <div className='relative col-span-1 row-span-1 h-full lg:h-40'>
          <Image
            src='/images/PressKit/RestScreen2.png'
            alt='Rest screen of project'
            className='mb-2 flex border-2 border-[#00e580]'
            width={320}
            height={320}
          />
          <button className=''>
            <a
              className='block hover:text-[#00e58e]'
              href='/publicfiles/BiteDown_Studio_Branding_v1.zip'
              download='BiteDownStudioBranding'
            >
              Download all screenshots as .zip ↓
            </a>
          </button>
        </div>
        <div className='col-span-3 row-span-1 flex h-full w-full flex-col text-base sm:text-base md:col-span-3 md:text-lg lg:col-span-4 lg:text-xl'>
          <div className='text-xl text-[#00e58e] sm:text-xl md:text-2xl lg:text-3xl'>
            The Longest Dungeon
          </div>
          <div>
            A Unity based deck building dungeon crawler game exploring the
            themes of burnout, escapism and the cost of living as my universty
            capstone project The endearing pixel art facade of a dungeon is
            interrupted by modern day concepts that seem out of place. The game
            slowly reveals itself as you play with the intermittent addition of
            stressful new features until the facade is dropped entirely and
            we're met with the bleak reality of a young adult using escapsim to
            cope with their daily life. Through the lens of a card-based, day by
            day, dungeon crawler, The Longest Dungeon explores the themes of
            modern day burnout, mounting financial pressure and escapism.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;
