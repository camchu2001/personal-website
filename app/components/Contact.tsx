import React from 'react';
// import { FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section id="contact" className='mt-28'>
      <div className="flex flex-wrap justify-center">
        <Image src={'/contact.png'} alt={'contact'} width={70} height={70}
          className='mb-10'/>
        <p className="text-center text-base sm:text-lg lg:text-xl font-mono">
          Feel to reach out using the form below or send me an email at <a 
            href="mailto:camchu.dev.@gmail.com" className="underline">camchu.dev.@gmail.com
          </a> 🌟
        </p>
      </div>

      <div className="mt-8">
        {/* <input type="email"/>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit
          <FaPaperPlane />
        </button> */}
      </div>
    </section>
  );
};
