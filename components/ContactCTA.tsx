import React from 'react';

interface ContactCTAProps {
  side?: 'left' | 'right';
}

export const ContactCTA = ({ side = 'right' }: ContactCTAProps) => {
  return (
    <section className="p-10 py-20 md:px-20 relative bg-[url('/roof.jpg')] w-full bg-center bg-cover bg-no-repeat after:content-[''] after:absolute after:inset-0 after:bg-[#151524] after:opacity-90">
      <div className={`space-y-4 sm:w-[400px] ${side == 'left' ? 'mr-auto' : 'ml-auto'}`}>
        <h1 className='z-10 relative text-white text-xl sm:text-3xl font-bold'>Stop worrying and reach out to one of our roofing professionals</h1>
        <p className='z-10 relative text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt voluptates minus voluptatum quos esse autem nulla facilis. Laboriosam odit recusandae, similique dolorum dolor earum aliquam? Cupiditate, consectetur soluta. Deserunt?</p>
        <button className='z-10 text-white relative bg-[#b96f41] p-2 px-4'>Contact Us</button>
      </div>
    </section>
  );
};

