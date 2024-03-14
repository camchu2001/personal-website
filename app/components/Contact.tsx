'use client';
import React from 'react';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section id="contact" className='mb-20'>
      <div className="justify-center items-center">
        <Image src={'/contact.png'} alt={'contact'} width={70} height={70}
          className='mb-5 md:w-[100px]'/>
        <p className="text-center text-base sm:text-lg lg:text-xl font-mono">
          Feel to reach out send me an email at <a 
            href="mailto:camchu.dev@gmail.com" className="underline">camchu.dev@gmail.com
          </a> 🌟
        </p>
      </div>
    </section>
  );
};
