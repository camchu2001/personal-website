import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Hello, I am Cam Chu
          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                    Welcome to my website. 
                    I am a software engineer on a mission to learn and create. 
                    Feel free to explore my projects and check out my coding journey.
          </p>
        </div>
            
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[310px] h-[310px] relative">
            <Image
              src="/hero-section.png"
              alt="coding girl"
              className="absolute transform -translate-x-1/2.5 -translate-y-1/2 top-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
