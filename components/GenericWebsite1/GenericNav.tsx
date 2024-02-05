import { Montserrat, Roboto_Serif } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { AlignJustify } from 'lucide-react'

type Props = {}

const montserrat = Montserrat({ subsets: ['latin'] })
// const roboto = Roboto_Serif({ subsets: ['latin'] })

const GenericNav = (props: Props) => {
  return (
    <div className={cn(montserrat.className, 'w-full px-10 lg:px-40 py-10 flex items-center justify-between text-xs')}>
      <Image src="/genericlogo.svg" alt="Logo" width={100} height={100} />
      <ul className='hidden lg:flex space-x-4 uppercase font-semibold'>
        <li>Who we are</li>
        <li>Investments</li>
        <li>Fund manager services</li>
        <li>News & Insights</li>
        <li>Contact</li>
      </ul>
      <div className='flex items-center'>
        <p className='font-bold uppercase mr-6 lg:mr-0'>Login</p>
        <AlignJustify className='lg:hidden' />
      </div>
    </div>
  )
}

export default GenericNav