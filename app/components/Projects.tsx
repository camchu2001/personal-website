/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export const Projects = () => {
  return (
    <section className='my-[3rem] md:my-[5rem]'>
      <div className="flex">
        <div className="">
          <Link href={'https://main--camchuwiki.netlify.app/'} 
            className='block w-full sm:w-10/12 md:w-6/12 lg:w-4/12'>
            <img src={'/my-wiki.png'} alt='my-wiki-pic' width={100} height={100}
              className='w-full rounded-lg'/>
          </Link>
        </div>
      </div>
    </section>
  );
};
