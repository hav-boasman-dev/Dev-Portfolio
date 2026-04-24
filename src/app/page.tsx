import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className='relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 text-white sm:gap-2 sm:p-4 md:grid-cols-3 md:gap-3 md:p-6 lg:h-screen lg:grid-cols-4 lg:grid-rows-8 lg:gap-4'>
      <div className='card group align-start perspective-1200 relative col-span-1 row-span-4 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3'>
        <HeroSection />
      </div>

      <div className='card group align-start perspective-1200 relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-4 lg:col-span-1'>
        <AboutSection />
      </div>

      <div className='card group align-start perspective-1200 relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-4 lg:col-span-1'>
        <ContactSection />
      </div>

      <div className='card group align-start perspective-1200 relative col-span-1 row-span-2 h-full w-full flex-none transform justify-start overflow-hidden rounded-lg border border-[#414141] bg-[#1b1b1b] p-6 transition-all duration-300 ease-out hover:border-[#00e58e] md:col-span-3 md:row-span-4 lg:col-span-2'>
        <ProjectsSection />
      </div>
    </main>
  );
}
