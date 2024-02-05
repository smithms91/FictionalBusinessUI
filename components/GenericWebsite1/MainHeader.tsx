import { cn } from '@/lib/utils'
import { Montserrat, Roboto_Serif } from 'next/font/google'
import React from 'react'

type Props = {}

const roboto = Roboto_Serif({
  subsets: ['latin'],
  weight: ["400", "700"],
})
const montserrat = Montserrat({ subsets: ['latin'] })


const MainHeader = (props: Props) => {
  return (
    <header className={cn(roboto.className, 'bg-[#F7F5F1] pt-40 pb-60 w-full flex items-center justify-center')}>
      <div className='relative lg:w-[750px] md:w-[500px] sm:w-[400px] w-[200px]'>
        <h1 className='lg:text-5xl md:text-3xl sm:text-3xl text-2xl lg:leading-[4rem] before:content-[""] before:absolute before:h-[2px] before:w-[75px] before:bg-[#E8E3DB] before:shadow-sm before:top-[-75px] before:left-0 text-[#2B374E]'>We partner with fund managers to bring exceptional opportunites to investors</h1>
        <p className={cn(montserrat.className, 'absolute -rotate-90 top-20 -left-40 uppercase text-xs font-bold tracking-wider text-[#2B374E]')}>Challenging Convention</p>
      </div>
    </header>
  )
}

export default MainHeader