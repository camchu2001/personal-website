'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Home from '../../public/home.svg';

export const Navbar = () => {
  return (
    <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-[#253946]'>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between 
      mx-auto px-4 py-2">
        <div className="mt-2">
          <Link href={'/'}>
            <Image src={Home} alt='Homepage' width={80} height={50} className='ml-2 
			  sm:w-[90px] md:w-[90px] lg:w-[120px]' />
          </Link>
        </div>
        <div className="mt-2 flex gap-10 md:text-xl text-lg">
          <Link href={'/'}>Projects</Link>
          <Link href={'/'}>Second Brain</Link>
        </div>
      </div>
    </nav >
  );
};
