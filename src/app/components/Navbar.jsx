/*
Navbar component that contains all the standard links for the webpage
uses text when on large screens and icons when on small screens
*/

'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='bg-opacity-100 fixed top-0 right-0 left-0 z-10 bg-[#121212]'>
      <div className='mx-auto flex flex-wrap items-center justify-between px-4 py-2'>
        <Link
          href={'/'}
          className='text-2xl font-semibold text-white md:text-5xl'
        >
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='mt-0 flex p-4 md:flex-row md:space-x-8 md:p-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
