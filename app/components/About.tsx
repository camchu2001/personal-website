/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

export const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="mt-14 text-[#EFEFEF]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="sm:col-span-6 lg:col-span-7.5 
        place-self-center text-center sm:text-left 
						justify-self-start">
          <p className="text-base sm:text-lg mb-6 lg:text-xl font-mono">
						Hi there! My name is Cam, I'm a Software Engineer and 
            a full-stack Web Developer!
            <br></br>
						This is where I share my projects, my experiences, and my coding journey. 
            I hope you'll find something to enjoy~ 😊
          </p>

          <div className="flex gap-5 items-center">
            <img src='/contact.png' alt='contact' className='md:w-[50px] w-[30px] mr-5' />
            <p className="text-base sm:text-lg lg:text-xl font-mono"> <a 
              href="https://github.com/camchu2001" 
              className="underline decoration-[#eab308]">github</a> 
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-mono"> <a 
              href="https://www.linkedin.com/in/cam-chu/" 
              className="underline decoration-[#10A2FF]">linkedin</a> 
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-mono"> <a 
              href="https://codepen.io/Cam-Chu" 
              className="underline decoration-[#ec4899]">codepen</a> 
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-mono"> <a 
              href="mailto:camchu.dev@gmail.com" 
              className="underline decoration-[#eab308]">camchu.dev@gmail.com</a> 🌟 
            </p>
          </div>
        </div>
       
        <div className="col-span-2"></div>

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