/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export const Projects = () => {
  return (
    <section className='my-[3rem] md:my-[5rem]'>
      <Link href={'https://main--camchuwiki.netlify.app/'}>
        <img src={'/my-wiki.png'} alt='my-wiki-pic' width={100} height={100}
          className='w-full sm:w-10/12 rounded-md md:w-6/12 lg:w-4/12'/>
      </Link>
    </section>
  );
};
