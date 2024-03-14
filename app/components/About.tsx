/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="sm:col-span-6 lg:col-span-7.5 place-self-center text-center sm:text-left 
						justify-self-start">
          <p className="text-[#FFC57C] text-base sm:text-lg mb-6 lg:text-xl font-mono">
						Hi there! My name is Cam, I'm a Software Engineer and 
            a full-stack Web Developer!
            <br></br>
						This is where I share my projects, my experiences, and my coding journey. 
            I hope you'll find something to enjoy~ 😊
          </p>

          <div className="flex gap-5 item-center justify-between">
            <img src={'/contact.png'} alt={'contact'} width={50} height={50}
              className='mb-5 md:w-[60px]'/>
            <p className="text-base sm:text-lg lg:text-xl font-mono"> <a 
              href="mailto:camchu.dev@gmail.com" 
              className="underline">camchu.dev@gmail.com</a> 🌟 
            </p>
          </div>
          <div className="">
            <Link href={'/Resume.pdf'}>
              <button className="px-6 py-3 w-full sm:w-fit sm:mb-2 rounded-full mr-4 mb-3 
			  					font-semibold bg-gradient-to-r from-rose-400 to-orange-300  
								text-white border border-white hover:font-bold 
								hover:from-pink-500 hover:via-red-500 
								hover:to-yellow-500 focus:outline-none">
								My Resume
              </button>
            </Link>
            <Link href={'#contact'}>
              <button
                className="px-6 py-3 w-full sm:w-fit sm:mb-2 rounded-full font-semibold
                             bg-[#6EA172] text-white border border-white 
                             hover:bg-[#3c5d3f] hover:font-bold focus:outline-none">
								Contact Me
              </button>
            </Link>
          </div>
        </div>
       
       
        <div className="sm:col-span-2 lg:col-span-2"></div>

        {/* IMAGE */}
        <div className="sm:col-span-3 lg:col-span-2.5 place-self-top mt-4 lg:mt-0">
          <div className="rounded-full bg-[white] w-[210px] h-[210px] 
		  				lg:w-[310px] lg:h-[310px] relative">
            <img
              src={flipped ? '/profile-picture.png' : '/animated-profile.png'}
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