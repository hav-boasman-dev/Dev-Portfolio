import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}) => {
  return (
    <div>
      <div
        className='group/project relative h-52 rounded-t-xl md:h-72'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className='overlay bg-opacity-0 group-hover:bg-opacity-10 absolute top-0 left-0 hidden h-full w-full items-center justify-center bg-[#181818] transition-all duration-500 group-hover/project:flex'>
          <Link
            href={gitUrl}
            className='group/link relative mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white'
          >
            <CodeBracketIcon className='absolute top-1/8 left-1/2 h-10 w-10 -translate-x-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white'></CodeBracketIcon>
          </Link>
          <Link
            href={previewUrl}
            className='group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white'
          >
            <EyeIcon className='absolute top-1/8 left-1/2 h-10 w-10 -translate-x-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white'></EyeIcon>
          </Link>
        </div>
      </div>
      <div className='rounded-b-xl bg-[#181818] px-4 py-6 text-white'>
        <h5 className='mb-2 text-xl font-semibold'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
