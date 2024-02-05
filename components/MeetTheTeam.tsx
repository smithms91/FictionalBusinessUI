'use client'

import React from 'react'
import Image from 'next/image'

type Props = {}

const MeetTheTeam = (props: Props) => {
  return (
    <section className='w-full p-10 md:p-20 text-center bg-[#e8e8e8]'>
      <p className='uppercase font-semibold text-[#da834e]'>Meet our team</p>
      <h1 className='text-3xl font-bold text-[#272255] z-10'>Teamwork makes the dream work.</h1>
      <p className='sm:w-[400px] md:w-[600px] m-auto sm:py-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, atque! Porro quasi soluta exercitationem nulla impedit autem voluptas expedita laudantium dolores excepturi. Culpa dignissimos aut ut minus neque cupiditate provident?</p>
      <ul className='flex flex-col sm:flex-row justify-center w-full items-center mt-4 flex-wrap'>
        <li className='p-4 drop-shadow-xl w-[280px] h-[450px] xl:w-[350px] '><Image src="/team-1.jpg" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
          width={250}
          height={400} alt="" /></li>
        <li className='p-4 drop-shadow-xl w-[280px] h-[450px] xl:w-[350px] hidden lg:block'><Image src="/team-2.jpg" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
          width={250}
          height={400} alt="" /></li>
        <li className='p-4 drop-shadow-xl w-[280px] h-[450px] xl:w-[350px] sm:block hidden'><Image src="/team-3.jpg" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
          width={250}
          height={400} alt="" /></li>
      </ul>
    </section>
  )
}

export default MeetTheTeam