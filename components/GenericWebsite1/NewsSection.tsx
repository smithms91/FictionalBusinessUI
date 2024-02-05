import { cn } from '@/lib/utils'
import { Roboto_Serif } from 'next/font/google'
import React from 'react'

type Props = {}

const roboto = Roboto_Serif({ subsets: ['latin'] })

const NewsSection = (props: Props) => {
  return (
    <section className='flex flex-col sm:flex-row w-full flex-wrap'>
      <div className='flex flex-col justify-between p-20 text-[#2B374E] bg-[#F3F0EC] w-full sm:w-[50%] xl:w-[25%]'>
        <h1 className={cn(roboto.className, 'text-lg relative py-4 before:content-[""] before:absolute before:h-[3px] before:w-[25px] before:bg-[#2B374E] before:top-[-10px] before:left-0')}>Cras mattis consectetur purus sit amet fermentum.</h1>
        <div className='text-xs text-[#9BABB5] font-semibold uppercase'>
          <p>Jan 18 2024</p>
          <p>In <span className='text-[#2B374E] font-bold'>Industry Insights</span></p>
        </div>
      </div>
      <div className='flex flex-col justify-between p-20 bg-[#F8F6F4] text-[#2B374E] w-full sm:w-[50%] xl:w-[25%]'>
        <h1 className={cn(roboto.className, 'text-lg relative py-4 before:content-[""] before:absolute before:h-[3px] before:w-[25px] before:bg-[#2B374E] before:top-[-10px] before:left-0')}>Sociis natoque penatibus et magnis.</h1>
        <div className='text-xs text-[#9BABB5] font-semibold uppercase justify-self-end'>
          <p>Jan 18 2024</p>
          <p>In <span className='text-[#2B374E] font-bold'>Industry Insights</span></p>
        </div>
      </div>
      <div className='flex flex-col justify-between p-20 bg-[#FBFBF9] text-[#2B374E] w-full sm:w-[50%] xl:w-[25%]'>
        <h1 className={cn(roboto.className, 'text-lg relative py-4 before:content-[""] before:absolute before:h-[3px] before:w-[25px] before:bg-[#2B374E] before:top-[-10px] before:left-0')}>Cras mattis consectetur purus sit amet mentum parturient egestas.</h1>
        <div className='text-xs text-[#9BABB5] font-semibold uppercase'>
          <p>Jan 18 2024</p>
          <p>In <span className='text-[#2B374E] font-bold'>Industry Insights</span></p>
        </div>
      </div>
      <div className='flex flex-col justify-between p-20 bg-[#FEFDFD] text-[#2B374E] w-full sm:w-[50%] xl:w-[25%]'>
        <h1 className={cn(roboto.className, 'text-lg relative py-4 before:content-[""] before:absolute before:h-[3px] before:w-[25px] before:bg-[#2B374E] before:top-[-10px] before:left-0')}>Etiam porta sem malesuada magna mollis euismod.</h1>
        <div className='text-xs text-[#9BABB5] font-semibold uppercase'>
          <p>Jan 18 2024</p>
          <p>In <span className='text-[#2B374E] font-bold'>Industry Insights</span></p>
        </div>
      </div>
    </section>
  )
}

export default NewsSection

