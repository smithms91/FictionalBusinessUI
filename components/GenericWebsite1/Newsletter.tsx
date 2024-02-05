import React from 'react'
import { SimpleNewsletter } from '../forms/SimpleNewsletter'
import { Montserrat, Roboto_Serif } from 'next/font/google'
import { cn } from '@/lib/utils'

type Props = {}

const roboto = Roboto_Serif({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const Newsletter = (props: Props) => {
  return (
    <section className='bg-[#073546] w-full flex flex-col sm:flex-row sm:items-center sm:justify-center sm:h-[150px]'>
      <div className={cn(roboto.className, 'basis-2/4 space-y-1 py-4 text-center sm:px-10')}>
        <h2 className='text-[#D1C9BE] text-lg font-light'>Sign up for Latest News</h2>
        <p className={cn(montserrat.className, 'text-white text-xs')}>Receive investment news right to your inbox</p>
      </div>
      <div className='basis-2/4 h-full'>
        <SimpleNewsletter />
      </div>
    </section>
  )
}

export default Newsletter