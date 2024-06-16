import React from 'react'
import Image from 'next/image'

// Assets
import WhiteLogo from '../../../assets/new_logo.png'
import Hero from '../../../assets/groupal.jpg'
import Iso1 from '../../../assets/iso-1.jpg'
import Iso2 from '../../../assets/iso-2.jpg'
import Charity from '../../../assets/charity.png'

export default function Intro() {
  return (
    <article className=' w-full fira h-[22.5rem] opacity-80'>
      {/* Bg image */}
      <div className="-z-30 absolute inset-0 h-[30.5rem] sm:h-[45.5rem] md:h-[48.5rem] xl:h-[62.5rem]">
        <Image 
            className=' w-full h-full object-cover '
            src={Hero} 
            title='Hero image'
            alt='Hero image, hands holding with support'
            fill
            sizes='100vw'
            priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>  
      </div>

      <section className=" page h-full ">
        <Image 
          src={WhiteLogo}
          className='h-[6.5rem] w-auto'
          title='Blueline Cleaning Logo'
          alt='Blueline Cleaning Logo'
        />
        <div className="mt-[1rem] flex gap-[2rem] ">
          <div className="flex flex-col gap-[1rem] w-2/5">
            <div className="grid grid-cols-2 gap-2 rounded-xl">
              <Image 
                src={Iso1}
                className='w-[4rem] h-auto'
                title='ISO 14001 Certificate'
                alt='ISO 14001 Certification'
              />
              <Image 
                src={Iso2}
                className='w-[4rem] h-auto'
                title='ISO 9001 Certificate'
                alt='ISO 9001 Certification'
              />
              <Image 
                src={Charity}
                className='w-[4rem] h-auto col-span-2 mx-auto'
                title='Registered Charity Certificate'
                alt='Registered Charity Certification'
              />

            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem] text-white w-3/5">
            <h1 className='font-bold text-[1.3rem] leading-[1.5rem]'>Registered Charity Organization Providing Cleaning Solutions Across Tasmania</h1>
            <h3 className='leading-[1.2rem]'>
              Your mess supports our mission!
            </h3>
          </div>
        </div>
       
      </section>
    </article>
  )
}
