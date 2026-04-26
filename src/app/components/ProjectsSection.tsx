"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectsCard";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "This portfolio was made using the next.js framework to learn modern web development pipelines while preparing for work.",
    image: "/images/Projects/portfolio_screenshot.png",
    gitUrl: "https://github.com/hav-boasman-dev/dev-portfolio",
  },
  {
    id: 2,
    title: "The Longest Dungeon",
    description:
      "A Unity based deck building dungeon crawler game exploring the themes of burnout, escapism and the cost of living as my universty capstone project",
    image: "/images/Projects/The_Longest_Dungeon.png",
    gitUrl: "https://github.com/hav-boasman-dev/TheLongDungeon",
  },
  {
    id: 2,
    title: "Haiku and Hint Fiction",
    description:
      "Two small environments based around the concepts of haiku and hint fiction while depicting two of my core memories",
    image: "/images/Projects/haikus_and_hintFiction.png",
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
        <h2 className='mt-4 mb-10 text-center text-4xl font-bold'>
          MY PROJECTS / WORK
        </h2>
        <ul ref={ref} className='grid gap-8 md:grid-cols-3 md:gap-12'>
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
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
