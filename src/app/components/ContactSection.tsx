import React from "react";
import ReactiveArrow from "./ReactiveArrow";
import ArrowSvg from "./ArrowSvg";

const ContactSection = () => {
  return (
    <div className='h-full'>
      <h1 className='mb-2 p-6 pb-0 text-xl'>Thinking of working together?</h1>
      <div className='mb-6 px-6 text-sm'>
        Feel free to reach out to me if you want to collaborate, offer a role or
        just chat!
      </div>
      <ul className='mb-6 px-6 text-xl'>
        <div className='font-mono font-bold text-[#555555]'>CONTACT POINTS</div>
        <div className='group/svg flex items-center justify-between'>
          <a
            className='group-hover/svg:text-[#00e58e]'
            href='http://www.linkedin.com/in/hav-boasman/'
            target='_blank'
          >
            LINKEDIN
          </a>
          <ReactiveArrow />
        </div>
        <div className='group/svg flex items-center justify-between'>
          <a
            className='group-hover/svg:text-[#00e58e]'
            href='http://github.com/hav-boasman-dev'
            target='_blank'
          >
            GITHUB
          </a>
          <ReactiveArrow />
        </div>
        <div className='group/svg flex items-center justify-between'>
          <a
            className='group-hover/svg:text-[#00e58e]'
            href='mailto:hav.boasman.dev@gmail.com'
            target='_blank'
          >
            EMAIL
          </a>
          <ReactiveArrow />
        </div>
      </ul>
    </div>
  );
};

export default ContactSection;
