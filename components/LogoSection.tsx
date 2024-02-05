import React from 'react'
import Image from 'next/image'

type Props = {}

const LogoSection = (props: Props) => {
  return (
    <section className='relative flex flex-wrap  w-full justify-between items-center px-20 py-5 bg-[#e8e8e8]'>
      <Image src="/logos/logoipsum-325.svg" width="100" height="100" alt="Dummy logo" />
      <Image className="xs:hidden" src="/logos/logoipsum-289.svg" width="100" height="100" alt="Dummy logo" />
      <Image className='hidden md:block' src="/logos/logoipsum-300.svg" width="100" height="100" alt="Dummy logo" />
      <Image className='hidden md:block' src="/logos/logoipsum-285.svg" width="100" height="100" alt="Dummy logo" />
      <Image className='hidden sm:block' src="/logos/logoipsum-317.svg" width="100" height="100" alt="Dummy logo" />
      <Image className='hidden sm:block' src="/logos/logoipsum-332.svg" width="100" height="100" alt="Dummy logo" />
      {/* <svg className="absolute z-2 w-160 right-0 rotate-45 top-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path className="z-2" fill="#F2F4F8" d="M40.2,-63.6C49.4,-56.7,52.4,-41,61.1,-26.5C69.9,-12.1,84.4,1.1,87.6,16.1C90.9,31.1,82.8,47.9,69.1,55.1C55.4,62.3,36.1,59.8,21.3,57.2C6.4,54.5,-4,51.7,-19.3,53C-34.6,54.3,-54.8,59.7,-66.8,53.6C-78.7,47.5,-82.4,29.9,-77.5,15.6C-72.6,1.3,-59.1,-9.8,-52.2,-23.4C-45.3,-37,-44.9,-53.1,-37.3,-60.8C-29.7,-68.5,-14.8,-67.8,0.3,-68.3C15.5,-68.8,31,-70.6,40.2,-63.6Z" transform="translate(100 100)" />
      </svg> */}
    </section>
  )
}

export default LogoSection