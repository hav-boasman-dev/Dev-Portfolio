"use client";
import React, { useState, useRef, useTransition } from "react";
import ProjectCard from "./ProjectsCard";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Longest Dungeon",
    description:
      "A Unity based deck building dungeon crawler game exploring the themes of burnout, escapism and the cost of living as my universty capstone project",
    descriptionExtended:
      "A Unity based deck building dungeon crawler game exploring the themes of burnout, escapism and the cost of living as my universty capstone project </br> </br> The endearing pixel art facade of a dungeon is interrupted by modern day concepts that seem out of place. The game slowly reveals itself as you play with the intermittent addition of stressful new features until the facade is dropped entirely and we're met with the bleak reality of a young adult using escapsim to cope with their daily life. Through the lens of a card-based, day by day, dungeon crawler, The Longest Dungeon explores the themes of modern day burnout, mounting financial pressure and escapism.",
    image: "/images/Projects/theLongestDungeonCard.png",
    gitUrl: "https://github.com/hav-boasman-dev/TheLongDungeon",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description:
      "This portfolio was made using the next.js framework to learn modern web development pipelines while preparing for work.",
    descriptionExtended:
      "This portfolio was made using the next.js framework to learn modern web development pipelines while preparing for work.",
    image: "/images/Projects/portfolioCard.png",
    gitUrl: "https://github.com/hav-boasman-dev/dev-portfolio",
  },
  {
    id: 3,
    title: "Haiku and Hint Fiction",
    description:
      "Two small environments based around the concepts of haiku and hint fiction while depicting two of my core memories",
    descriptionExtended:
      "Two small environments based around the concepts of haiku and hint fiction while depicting two of my core memories",
    image: "/images/Projects/haikusAndHintFictionCard.png",
    gitUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <div className='text-white'>
        <h2 className='mt-4 mb-10 text-center font-mono text-4xl font-bold text-[#00e58e]'>
          MY PROJECTS / WORK
        </h2>
        <ul
          ref={ref}
          className='grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 md:gap-12 lg:grid-cols-3 lg:grid-rows-2'
        >
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                descriptionExtended={project.descriptionExtended}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
