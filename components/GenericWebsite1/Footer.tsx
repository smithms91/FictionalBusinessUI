import React from 'react'
import Image from 'next/image'
import { Twitter, Linkedin } from 'lucide-react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='py-10 bg-[#01445D] w-full text-xs uppercase text-[#dbdbdb] tracking-wide'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between md:px-10 lg:px-40 items-center gap-4 border-b-2 pb-10 border-[#ffffff20]'>
        <Image src="/logoipsum-288.svg" alt="Logo" width={200} height={100} />
        <div className='flex items-center gap-4'>
          <Linkedin fill='#01445D' color='#01445D' size='14' className='w-[15px] p-2 box-content h-[15px] bg-white rounded-lg' />
          <Twitter fill='#01445D' color='#01445D' size='14' className='w-[15px] p-2 box-content h-[15px] bg-white rounded-lg' />
        </div>
      </div>
      <div className='p-10 lg:px-40 flex flex-col md:flex-row gap-y-8 justify-center md:justify-between items-left'>
        <div>
          <h1 className='font-bold mb-2'>Address</h1>
          <span className='opacity-75 space-y-1'>
            <p>Suite 2</p>
            <p>1 Street Name</p>
            <p>State NSW 6000</p>
            <p>Michigan</p>
          </span>
          <h1 className='font-bold mb-2 mt-4'>Telephone</h1>
          <span className='opacity-75 space-y-1'>
            <p>(586) 000-0000</p>
          </span>
        </div>
        <div className='flex font-semibold gap-10  border-[#00000010]'>
          <ul className='space-y-4'>
            <li>Private Investors</li>
            <li>Institutional Investors</li>
            <li>Who We Are</li>
            <li>News & Insights</li>
            <li>Contact</li>
          </ul>
          <ul className='space-y-4'>
            <li>Data Center</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Disclosures</li>
          </ul>
        </div>
        <div className=''>
          <h1 className='font-bold mb-2'>Challenging Convention</h1>
          <span className='opacity-75 space-y-2'>
            <p>Curabitur Blandit Tempus</p>
            <p>Porttitor. Vivamus Sagittis</p>
            <p>Lacus Vel Augue Laoreet</p>
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-y-4 pt-8 px-10 lg:px-40 border-t-2 border-[#ffffff20] opacity-75 '>
        <p>&copy; Copyright <strong className='text-[#e5e5e5]'>The Company</strong> PTY LTD ABN 00 000 000 000 | AFSL 111222</p>
        <p>Website by <strong className='text-[#e5e5e5]'>Mike</strong></p>
      </div>
    </footer>
  )
}

export default Footer