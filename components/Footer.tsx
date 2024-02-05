import React from 'react';
import { Mail, Smartphone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { FormOne } from './forms/FormOne';

interface FooterProps {

}

export const Footer = ({ }: FooterProps) => {
  return (
    <footer className='text-sm'>
      <section className='bg-[#f5f5f5] p-10 lg:px-32 flex-col items-center justify-between md:flex md:flex-row'>
        <div>
          <h1 className='text-2xl font-bold mb-4 uppercase'>Get in touch</h1>
          <p className='md:w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae doloremque pariatur autem temporibus! Suscipit, ullam aliquam quo labore et voluptatum voluptatem consequuntur quam adipisci eaque vel ab maiores maxime dolore.</p>
          <div className='space-y-4 mt-12'>
            <p className='flex items-center'><Mail className='mr-6' color='#f93946' /> smithms91@gmail.com</p>
            <p className='flex items-center'><Smartphone className='mr-6' color='#f93946' /> (586) 888-9127</p>
            <p className='flex items-center'><MapPin className='mr-6' color='#f93946' /> 26585 Kathy St., Roseville, MI</p>
          </div>
        </div>
        <FormOne />
      </section>
      <section className='bg-[#f93946] p-10 lg:px-32 text-white/75'>
        <h1 className='font-bold text-xl mb-4'>Footer</h1>
        <div className='flex-col md:flex md:flex-row items-end md:items-end'>
          <p className='md:basis-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam minima, aperiam eum necessitatibus, blanditiis rerum odio pariatur ipsa aliquid culpa natus illum? Velit, voluptates omnis nesciunt at exercitationem neque.</p>
          <div className='flex-col md:basis-3/5 my-4'>
            <h2 className='font-semibold mb-1'>About us</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam minima, aperiam eum necessitatibus, blanditiis rerum odio pariatur.</p>
          </div>
          <div className=''>
            <ul className='flex space-x-4 justify-end'>
              <li><Facebook /></li>
              <li><Twitter /></li>
              <li><Instagram /></li>
            </ul>
          </div>
        </div>
        <ul className='text-xs flex w-full justify-between mt-16 font-semibold'>
          <li>Home</li>
          <li>About Us</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Client</li>
          <li>Contact</li>
        </ul>
      </section>
    </footer>
  );
};

