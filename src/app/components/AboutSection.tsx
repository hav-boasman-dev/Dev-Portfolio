"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "SKILLS",
    id: "skills",
    content: (
      <ul className='list-disc pl-2 text-sm'>
        <li>Unity and Unreal Engine</li>
        <li>UI/UX Design</li>
        <li>Git Version Control</li>
        <li>Next.js and Web APIs</li>
        <li>Networking and basic CyberSecurity</li>
        <li>Graphic asset production</li>
        <li>User Experience Tuning</li>
        <li>Web API integration</li>
        <li>Project management</li>
      </ul>
    ),
  },
  {
    title: "EDUCATION",
    id: "education",
    content: (
      <ul className='text-sm'>
        <li>
          Bachelor of Design <br /> Digital Media
        </li>
        <li className='text- text-[#555555]'>
          Royal Melbourne Institute of Technology
        </li>
        <li className=''>
          <br /> Guaranteed Entry For: <br /> Masters of Animation, Games and
          Interactivity
        </li>
        <li className='text-[#555555]'>
          Royal Melbourne Institute of Technology <br />
          Plan to attend course in ~2029
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='items-center gap-2 px-2 py-2 sm:py-2 xl:gap-2 xl:px-2'>
        <div className='mt-2 flex h-full flex-col text-left md:mt-0'>
          <h2 className='mb-4 font-mono text-xl font-bold text-[#00e58e]'>
            ABOUT ME
          </h2>
          <p className='text-base md:text-sm'>
            I work primarily on game development but have experience in web
            design, software solutions and even some networking and
            CyberSecurity. <br />
            <br /> At home i love making digital art for both my partner and I's
            streams and when im finally away from the computer I love
            rollerskating at my local rink, thrifting at local markets and
            playing DnD.
          </p>
          <div className='mt-8 flex flex-row justify-start'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              SKILLS{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              EDUCATION{" "}
            </TabButton>
          </div>
          <div className='mt-4 text-base'>
            {tabData.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
