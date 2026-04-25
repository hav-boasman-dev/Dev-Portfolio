"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectsCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A portfolio made using the next.js framework to learn modern web development pipelines while preparing for work.",
    image: "/images/Projects/placeholder.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "The Longest Dungeon",
    description:
      "A Unity based deck building dungeon crawler game exploring the themes of burnout, escapism and the cost of living",
    image: "/images/Projects/placeholder.png",
    gitUrl: "/",
    previewUrl: "/",
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
        <h2 className='mt-4 mb-6 text-center text-4xl font-bold'>
          My Projects
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
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
