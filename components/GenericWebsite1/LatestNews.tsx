import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Montserrat, Roboto_Serif } from 'next/font/google'
import React from 'react'

type Props = {}

const montserrat = Montserrat({ subsets: ['latin'] })
const roboto = Roboto_Serif({ subsets: ['latin'] })

const LatestNews = (props: Props) => {
  return (
    <div className='lg:w-full relative lg:px-40 flex flex-col text-white justify-between lg:pb-20' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.57) 0%, #013E55 50%), url('/pattern-bg.png')" }}>
      <div className='flex flex-col xl:flex-row items-end justify-end md:-mt-20 -mt-20 lg:-mt-40'>
        <div className='bg-[#01445D] p-10 md:p-20 xl:pt-40 text-sm space-y-4'>
          <h1 className={cn(roboto.className, 'text-2xl')}>Rare investments for astute investors.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis cupiditate tempora doloremque alias explicabo harum corrupti illum? Itaque eaque quasi beatae culpa quam dignissimos ex fugiat quibusdam provident quisquam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis cupiditate tempora doloremque alias explicabo harum corrupti illum? Itaque eaque quasi beatae culpa quam dignissimos ex fugiat quibusdam provident quisquam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis cupiditate tempora doloremque alias explicabo harum corrupti illum? Itaque eaque quasi beatae culpa quam dignissimos ex fugiat quibusdam provident quisquam?</p>
          <button className='flex items-center text-[#D1C9BE] uppercase text-xs font-semibold pt-10'>Learn more about us <ArrowRight size='12' className='ml-1' color="#5E8793" /> </button>
        </div>
        <div className='text-sm'>
          <div className='bg-[#F26854] p-10 md:p-20 space-y-6'>
            <h1 className={cn(roboto.className, 'text-2xl')}>For private investors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat incidunt animi eius veritatis temporibus, vitae assumenda, voluptates ut quod neque nulla quam. Odio, rem culpa cum saepe natus quibusdam!</p>
            <button className='flex items-center bg-white rounded-full text-[#01445D] px-8 py-3 font-bold uppercase text-xs'>View our investments <ArrowRight size='12' className='ml-1' color="#F26854" /></button>
          </div>
          <div className='bg-[#539CC0] p-10 md:p-20 space-y-6'>
            <h1 className={cn(roboto.className, 'text-2xl')}>For institutional investors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium inventore, quaerat tempora ducimus laborum deleniti blanditiis dolore? Recusandae rerum laboriosam maiores assumenda est pariatur veritatis ullam sapiente ratione libero.</p>
            <button className='flex items-center bg-white rounded-full text-[#01445D] px-8 py-3 font-bold uppercase text-xs'>See our services <ArrowRight size='12' className='ml-1' /></button>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between lg:mt-20 py-10 md:px-20 lg:px-0 xl:px-20'>
        <button className='flex items-center text-[#D1C9BE] uppercase text-xs font-semibold'><ArrowLeft size='12' className='mr-2' color='#5E8793' /> View all case studies</button>
        <h1 className={cn(roboto.className, 'text-sm md:text-xl lg:text-xl text-[#FBFBFB]')}>The Latest from the Company</h1>
        <button className='flex items-center text-[#D1C9BE] uppercase text-xs font-semibold'>View all news <ArrowRight size='12' color="#5E8793" className='ml-2' /></button>
      </div>
    </div>
  )
}

export default LatestNews