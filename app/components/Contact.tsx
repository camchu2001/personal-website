import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section id="contact" className='mt-24'>
      <div className="flex flex-wrap flex-col justify-center items-center">
        <Image src={'/contact.png'} alt={'contact'} width={70} height={70}
          className='mb-10'/>
        <p className="text-center text-base sm:text-lg lg:text-xl font-mono">
          Feel to reach out using the form below or send me an email at <a 
            href="mailto:camchu.dev.@gmail.com" className="underline">camchu.dev@gmail.com
          </a> 🌟
        </p>
      </div>

      <form className="mt-6 flex flex-wrap flex-col md:items-center">
        <input type="email" name='senderEmail' placeholder='Your email ' maxLength={500} required 
          className='p-2 mb-4 h-[3rem] md:w-[700px] rounded-md border-black text-black'/> 

        <input type="text" name='emailSubject' placeholder='Your subject ' 
          className='p-2 mb-4 h-[3rem] md:w-[700px] rounded-md border-black text-black'/>

        <textarea name="message" placeholder="Your message " maxLength={5000} required
          className='p-2 mb-4 h-[10rem] md:w-[700px] rounded-md border-black text-black'>
        </textarea>

        <div className="flex flex-wrap flex-col items-center">
          <button type="submit" 
            className='rounded-lg bg-black p-2 w-[100px] flex items-center'>
          Submit <FaPaperPlane className="ml-2"/>
          </button>
        </div>
      </form>
    </section>
  );
};
