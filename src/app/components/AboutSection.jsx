"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Unity and Unreal Engine</li>
        <li>UI/UX Design</li>
        <li>Git Version Control</li>
        <li>Next.js and Web APIs</li>
        <li>Networking and basic CyberSecurity</li>
        <li>Graphic asset production</li>
        <li>User Experience Tuning</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor of Design - Digital Media</li>
        <li>Royal Melbourne Institute of Technology, Melbourne, VIC</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Popcultcha Warehouse Worker</li>
        <li>
          Order fulfillment, forklift driving, data handling, large team
          coordination
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='items-center gap-2 px-2 py-2 sm:py-2 xl:gap-2 xl:px-2'>
        <div className='mt-2 flex h-full flex-col text-left md:mt-0'>
          <h2 className='mb-4 text-xl font-bold text-white'>About Me</h2>
          <p className='text-base md:text-sm'>
            placeholder text placeholder text placeholder text placeholder text
            placeholder text placeholder text placeholder text placeholder text
          </p>
          <div className='mt-8 flex flex-row justify-start'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
