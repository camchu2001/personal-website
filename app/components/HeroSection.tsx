"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';
import { delay } from 'framer-motion';

export const HeroSection = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className='mt-20 lg:mt-20 xl:mt-13'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* WELCOME TEXT */}
        <div className="sm:col-span-6 lg:col-span-7.5 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-[#FFC4A9] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi, I'm
            <TypeAnimation
              sequence={[
                " Cam Chu",
                1200,
                " a Web Developer",
                1200
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br></br>
          <p className='text-[#FFC57C] text-base sm:text-lg mb-6 lg:text-xl font-mono'>
            Welcome to my website 🚀 <br></br>
            I am a software engineer on a mission to learn and create.
            Feel free to explore my projects and check out my coding journey.
          </p>
          <br></br>
          <div className="">
            <Link href={"/Resume.pdf"}>
              <button className='px-6 py-3 w-full sm:w-fit sm:mb-2 rounded-full mr-4 mb-3 font-semibold
                               bg-gradient-to-r from-rose-400 to-orange-300  text-white border border-white
                               hover:font-bold hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 focus:outline-none'>
                My Resume
              </button>
            </Link>
            <button className='px-6 py-3 w-full sm:w-fit sm:mb-2 rounded-full font-semibold
                             bg-[#6EA172] text-white border border-white 
                             hover:bg-[#3c5d3f] hover:font-bold focus:outline-none'>
              Contact Me
            </button>
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-2"></div>

        {/* IMAGE */}
        <div className="sm:col-span-3 lg:col-span-2.5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[white] w-[210px] h-[210px] lg:w-[310px] lg:h-[310px] relative">
            <img
              src={flipped ? '/profile-picture.png' : '/hero-image.png'}
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                        lg:w-[290px]"
              width={200}
              height={200}
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};