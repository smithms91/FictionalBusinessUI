import { Montserrat, Roboto_Serif } from 'next/font/google'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {}

const roboto = Roboto_Serif({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const CaseStudy = (props: Props) => {
  return (
    <section className='flex flex-col md:flex-row w-full h-full'>
      <div className='bg-white w-full h-full p-10 flex flex-col justify-center xl:px-40 py-20 md:py-40 space-y-8 text-[#2B374E]'>
        <h1 className={cn(roboto.className, 'text-2xl lg:text-3xl')}>A Company<br /> Case Study</h1>
        <p className={cn(roboto.className, 'text-sm lg:text-lg')}>Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere.</p>
        <p className='text-sm lg:text-lg'>Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        <button className='flex items-center uppercase text-xs font-bold tracking-wider'>Explore the case study <ArrowRight className='ml-1' size="12" color="darkgray" /></button>
      </div>
      <div className='w-full relative bg-[#E7E1D9]'>
        <div className='absolute w-full h-[300px] md:h-full lg:h-full xl:h-[400px] xl:top-32 xl:-left-20'>
          <Image className="absolute top-28 -left-28 object-cover" src="/sheep.jpg" layout='fill' alt="Sheep" />
        </div>
      </div>
    </section>
  )
}

export default CaseStudy