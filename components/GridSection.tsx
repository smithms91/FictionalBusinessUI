'use client';

import React from 'react'
import Image from 'next/image'

type Props = {}

const GridSection = (props: Props) => {
  return (
    <section className='grid grid-rows-3 grid-cols-3 gap-0 w-full lg:w-[1000px] p-20 pb-0 pt-0'>
      <div className="p-10" style={{ gridArea: "1 / 1 / 2 / 3" }}>
        <h1 className='text-xl'>We are both entrepreneurs and custodians of capital.</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis molestias obcaecati tenetur ducimus quas maxime officia ad dolorem sint, error numquam saepe ex quibusdam et quidem cupiditate ipsam sed ab.</p>
      </div>
      <div className="relative h-full bg-cover" style={{ gridArea: "1 / 3 / 2 / 4", backgroundImage: "linear-gradient(#12023da1, #12023da1), url('/projects/1.jpg')" }}>
      </div>
      <div className="relative h-full bg-cover" style={{ gridArea: "2 / 1 / 4 / 2", backgroundImage: "linear-gradient(#12023dae, #12023dae), url('/projects/2.jpg')" }}>
      </div>
      <div className="relative h-full bg-cover grayscale" style={{ gridArea: "2 / 3 / 3 / 4", backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/projects/3.jpg')" }}>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full bg-[#0b023d] text-white" style={{ gridArea: "2 / 2 / 3 / 3" }}>
        <p>as</p>
        <p className='text-xl'>Entrepreneur</p>
      </div>
      <div className="relative flex items-center justify-center text-sm h-full text-center px-10" style={{ gridArea: "3 / 2 / 4 / 4" }}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis molestias obcaecati tenetur ducimus quas maxime officia ad dolorem sint, error numquam saepe ex quibusdam et quidem cupiditate ipsam sed ab.</p>
      </div>
    </section>
  )
}

export default GridSection