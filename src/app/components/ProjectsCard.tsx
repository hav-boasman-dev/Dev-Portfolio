import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
}: {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
}) => {
  return (
    <div>
      <div
        className='group/project relative h-52 rounded-t-xl md:h-72'
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='overlay absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-t-xl border border-[#1b1b1b] bg-[#181818]/0 transition-all duration-500 group-hover/project:border-[#00e58e] group-hover/project:bg-[#181818]/80'>
          <Link
            href={gitUrl}
            className='group/link relative mr-2 hidden h-14 w-14 rounded-full border-2 border-[#ADB7BE] group-hover/project:flex hover:border-[#00e58e]'
            target='_blank'
          >
            <CodeBracketIcon className='absolute top-1/8 left-1/2 h-10 w-10 -translate-x-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-[#00e58e]'></CodeBracketIcon>
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
