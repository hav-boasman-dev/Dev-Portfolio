import React from "react";
import ReactiveArrow from "./ReactiveArrow";

const ContactSection = () => {
  return (
    <div>
      <h1 className='mb-2 text-xl'>Thinking of working together?</h1>
      <div className='mb-6 text-base'>Get in Contact!</div>
      <ul className='mb-6'>
        <div className='text-[#555555] italic'>Contact Points</div>
        <div className='group/svg flex items-center justify-between'>
          <a
            className='group-hover/svg:text-[#00e58e]'
            href='http://www.linkedin.com/in/hav-boasman/'
            target='_blank'
          >
            LinkedIn
          </a>
          <ReactiveArrow />
        </div>
        <div className='group/svg flex items-center justify-between'>
          <a
            className='group-hover/svg:text-[#00e58e]'
            href='http://github.com/hav-boasman-dev'
            target='_blank'
          >
            Github
          </a>
          <ReactiveArrow />
        </div>
        <div className='group/svg flex items-center justify-between'>
          <a
            className='group-hover/svg:text-[#00e58e]'
            href='mailto:hav.boasman.dev@gmail.com'
            target='_blank'
          >
            Email
          </a>
          <ReactiveArrow />
        </div>
      </ul>

      <div>
        <button className='mr-4 w-full rounded-lg bg-linear-to-br from-[#00e58e] to-green-500 px-0.5 py-0.5 text-white hover:bg-slate-800 sm:w-fit'>
          <a
            className='block rounded-lg bg-[#121212] px-5 py-2 hover:bg-slate-700'
            href='/publicfiles/Haven_Boasman_CV_2026.pdf'
            download='HavenBoasmanCV2026'
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
