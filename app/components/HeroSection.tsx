import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
       {/* WELCOME TEXT */}
        <div className="sm:col-span-6 lg:col-span-7.5 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-[#FFC4A9] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    I'm Cam Chu
          </h1>
          <p className='text-[#FFC57C] text-base sm:text-lg mb-6 lg:text-xl font-mono'>
                    Hello, welcome to my website! <br></br>
                    I am a software engineer on a mission to learn and create.
                    Feel free to explore my projects and check out my coding journey.
          </p>
          <div className="">
            <button className='px-6 py-3 w-full sm:w-fit sm:mb-2 rounded-full mr-4 mb-3 text-white
                              bg-gradient-to-r from-rose-400 to-orange-300'>
             My Resume
            </button>
            <button className='px-6 py-3 w-full sm:w-fit sm:mb-2 rounded-full bg-transparent
                               hover:bg-slate-800 text-white border border-white'>
              Contact Me
            </button> 
          </div> 
        </div>

        <div className="sm:col-span-2 lg:col-span-2"></div>

         {/* IMAGE */}
        <div className="sm:col-span-3 lg:col-span-2.5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[white] w-[310px] h-[310px] lg:w-[410px] lg:h-[410px] relative">
            <Image
              src="/hero-image.png"
              alt="coding girl"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                        lg:w-[390px]"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
