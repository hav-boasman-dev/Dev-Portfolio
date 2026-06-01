"use client";
import React, { useState, useRef, useTransition } from "react";
import {
  CodeBracketIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectsCard = ({
  imgUrl,
  img2Url,
  img3Url,
  title,
  description,
  description2,
  description3,
  gitUrl,
}: {
  imgUrl: string;
  img2Url: string;
  img3Url: string;
  title: string;
  description: string;
  description2: string;
  description3: string;
  gitUrl: string;
}) => {
  const [isFullscreen, setIsFullscreen] = useState(true);
  const fullscreenToggle = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div
      className={
        isFullscreen
          ? ""
          : "absolute top-0 left-0 z-1000 col-span-3 row-span-2 float-left block h-full w-full transform justify-self-start overflow-hidden p-0 align-top sm:overflow-hidden md:overflow-y-scroll lg:overflow-y-scroll [&::-webkit-scrollbar]:w-0"
      }
    >
      <div
        className={
          isFullscreen
            ? "group/project relative h-52 md:h-72"
            : "group/project relative h-102 md:h-72"
        }
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='overlay absolute top-0 left-0 flex h-full w-full items-center justify-center border border-[#1b1b1b] bg-[#181818]/0 transition-all duration-500 group-hover/project:border-[#00e58e] group-hover/project:bg-[#181818]/80'>
          <Link
            href={gitUrl}
            className='group/link relative mr-2 hidden h-14 w-14 rounded-full border-2 border-[#ADB7BE] group-hover/project:flex hover:border-[#00e58e]'
            target='_blank'
          >
            <CodeBracketIcon className='absolute top-1/8 left-1/2 h-10 w-10 -translate-x-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-[#00e58e]'></CodeBracketIcon>
          </Link>
          <button
            onClick={fullscreenToggle}
            className='group/link relative mr-2 hidden h-14 w-14 rounded-full border-2 border-[#ADB7BE] group-hover/project:flex hover:border-[#00e58e]'
          >
            {isFullscreen ? (
              <ArrowsPointingOutIcon className='absolute top-1/8 left-1/2 h-10 w-10 -translate-x-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-[#00e58e]'></ArrowsPointingOutIcon>
            ) : (
              <ArrowsPointingInIcon className='absolute top-1/8 left-1/2 h-10 w-10 -translate-x-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-[#00e58e]'></ArrowsPointingInIcon>
            )}
          </button>
        </div>
      </div>
      <div
        className={
          isFullscreen
            ? "bg-[#181818] px-4 py-6"
            : "h-full w-full bg-[#181818] px-8 py-6 text-lg"
        }
      >
        <h5
          className={
            isFullscreen
              ? "mb-2 font-mono text-xl font-semibold text-[#00e580]"
              : "mb-2 flex w-full justify-center align-middle font-mono text-3xl font-semibold text-[#00e580]"
          }
        >
          {title}
        </h5>
        <div className=''>
          {isFullscreen ? (
            <p>{description}</p>
          ) : (
            <div className='grid h-full auto-rows-auto gap-4 p-6 md:grid-cols-1 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8'>
              <div>{description2}</div>
              <img
                src={img2Url}
                alt='project image'
                className='flex transform border-2 border-[#00e580]'
                width='full'
                height='full'
              />
              <img
                src={img3Url}
                alt='project image'
                className='flex transform border-2 border-[#00e580]'
                width='full'
                height='full'
              />
              <div>{description3}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
