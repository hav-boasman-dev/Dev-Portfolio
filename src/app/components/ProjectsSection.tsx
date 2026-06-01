"use client";
import React, { useState, useRef, useTransition } from "react";
import ProjectCard from "./ProjectsCard";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "THE LONGEST DUNGEON",
    description:
      "A Unity based deck building dungeon crawler game exploring the themes of burnout, escapism and the cost of living as my universty capstone project",
    description2:
      "A Unity based deck building dungeon crawler game exploring the themes of burnout, escapism and the cost of living as my universty capstone project. The endearing pixel art facade of a dungeon is interrupted by modern day concepts that seem out of place. The game slowly reveals itself as you play with the intermittent addition of stressful new features until the facade is dropped entirely and we're met with the bleak reality of a young adult using escapsim to cope with their daily life. Through the lens of a card-based, day by day, dungeon crawler, The Longest Dungeon explores the themes of modern day burnout, mounting financial pressure and escapism.",
    description3:
      "The game is broken down into days and weeks. Each day is another set of hidden cards that are either enemies, bonuses or nasty surprises. You flip each card one by one and spend your energy defeating enemies for gold and risking burnout to keep up with rent that is due at the end of each week. It was important that I fine tuned this gameplay loop so that a player would almost certainly reach further into the game before failing but also fail before the 7th week. The game is intentionally unwinnable and just a test of how far you can get in this unfair scenario.",
    image: "/images/Projects/theLongestDungeonCard.png",
    image2: "/images/Projects/theLongestDungeonScreenshot1.png",
    image3: "/images/Projects/theLongestDungeonScreenshot2.png",
    gitUrl: "https://github.com/hav-boasman-dev/TheLongDungeon",
  },
  {
    id: 2,
    title: "BYTEDOWN STUDIOS WEBSITE",
    description:
      "This portfolio was made using the next.js framework to learn modern web development pipelines while preparing for work.",
    description2:
      "This portfolio was made using the next.js framework to learn modern web development pipelines while preparing for work.",
    description3:
      "This portfolio was made using the next.js framework to learn modern web development pipelines while preparing for work.",
    image: "/images/Projects/portfolioCard.png",
    image2: "/images/Projects",
    image3: "/images/Projects",
    gitUrl: "https://github.com/hav-boasman-dev/dev-portfolio",
  },
  {
    id: 3,
    title: "HAIKU AND HINT FICTION",
    description:
      "Two small environments based around the concepts of haiku and hint fiction while depicting two of my core memories",
    description2:
      "Two small environments based around the concepts of haiku and hint fiction while depicting two of my core memories",
    description3:
      "Two small environments based around the concepts of haiku and hint fiction while depicting two of my core memories",
    image: "/images/Projects/haikusAndHintFictionCard.png",
    image2: "/images/Projects",
    image3: "/images/Projects",
    gitUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <div className='h-full text-white'>
      <h2 className='mt-4 mb-10 text-center font-mono text-4xl font-bold text-[#00e58e]'>
        BYTEDOWN STUDIO <span className='text-white'>| PROJECTS</span>
      </h2>
      <ul
        ref={ref}
        className='grid h-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 md:gap-12 lg:grid-cols-3 lg:grid-rows-2'
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            description2={project.description2}
            description3={project.description3}
            imgUrl={project.image}
            img2Url={project.image2}
            img3Url={project.image3}
            gitUrl={project.gitUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
