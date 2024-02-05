import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
interface FooterTwoProps {

}

export const FooterTwo = ({ }: FooterTwoProps) => {
  return (
    <footer className="p-10 md:px-20 text-white relative bg-[url('/bg.jpg')] bg-opacity-90 w-full bg-cover bg-no-repeat after:content-[''] after:absolute after:inset-0 after:bg-[#070614] after:opacity-90">
      <div className='flex flex-col sm:flex-row items-center justify-between relative'>
        <div className='relative z-10 text-center'>
          <h1 className='font-bold uppercase text-2xl'>Roofia</h1>
          <p className='text-xs'>Your Roofing Solutions.</p>
          <ul className='flex w-full justify-between mt-4 space-x-1 md:space-x-4'>
            <li><Facebook size="24" className='p-1 bg-[#b96f41]' /></li>
            <li><Twitter size="24" className='p-1 bg-[#b96f41]' /></li>
            <li><Instagram size="24" className='p-1 bg-[#b96f41]' /></li>
            <li><Linkedin size="24" className='p-1 bg-[#b96f41]' /></li>
          </ul>
        </div>
        <div className='my-10 relative z-10 flex justify-between sm:justify-evenly w-full'>
          <div className='sm:mr-4'>
            <p className='text-sm md:text-lg font-bold mb-4'>Services</p>
            <ul className='text-white/75 text-xs md:text-sm space-y-2'>
              <li>Installation</li>
              <li>Renovation</li>
              <li>Roof Repair</li>
              <li>Siding Corner</li>
              <li>Roofing Layer</li>
            </ul>
          </div>
          <div>
            <p className='text-sm md:text-lg font-bold mb-4'>Support</p>
            <ul className='text-white/75 text-xs md:text-sm space-y-2'>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className='relative z-10 w-full max-w-[400px]'>
          <p className='text-sm font-bold mb-2 md:text-lg'>Newsletter</p>
          <p className='text-xs md:text-sm'>Sign up for our newsletter to get updates, news, insight, or promotions.</p>
          <input className='w-full p-2 my-2' placeholder='email' />
          <button className='text-sm w-full bg-[#b96f41] p-2'>Subscribe</button>
        </div>
      </div>
      <div className='relative opacity-75 space-y-0 flex flex-col sm:flex-row sm:items-center items-center justify-center sm:justify-between text-xs md:text-sm mt-6 border-t-2 w-full z-20 pt-4 text-center'>
        <p className='mb-4 sm:mb-0'>&copy; 2024 Copyright all rights reserved by Web Dev</p>
        <p>Your Roofing Solutions</p>
      </div>
    </footer>
  );
};

