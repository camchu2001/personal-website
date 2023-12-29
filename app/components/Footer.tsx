import React from 'react';

export const Footer = () => {
  return (
    <footer className="mb-5 px-4 text-center text-gray-500 bg-[#2F4858]">
      <small className='mb-2 block text-xs font-semibold'>
        &copy; All rights reserved.
      </small>
      <p className='text-xs'>
        Website built using React & Next.js, Tailwind CSS, deployed using Vercel. 
      </p>
    </footer>
  );
};
