import React from 'react'
import Image from 'next/image'

// Assets
import WhiteLogo from '../../../assets/new_logo.png'
import Hero from '../../../assets/groupal.jpg'
import Banners from '../../../assets/banner.png'

export default function Intro() {
  return (
    <article className='lg:relative w-full fira h-[24.5rem] sm:h-[29.5rem] md:h-[42.5rem] lg:h-[40.5rem] opacity-80'>
      {/* Bg image */}
      <div className="-z-30 absolute inset-0 h-[30.5rem] sm:h-[35.5rem] md:h-[48.5rem] lg:h-auto ">
        <Image 
            className=' w-full h-full object-cover '
            src={Hero} 
            title='Hero image'
            alt='Hero image, hands holding with support'
            fill
            sizes='100vw'
            priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0081aa] via-[#0081aa] to-white opacity-60" aria-hidden="true"></div>  
      </div>

      <section className="page h-full md:flex md:items-center ">
        <div>
          <Image 
            src={WhiteLogo}
            className='h-[6.5rem] md:h-[10rem] xl:h-[12rem] w-auto'
            title='Blueline Cleaning Logo'
            alt='Blueline Cleaning Logo'
            height={192}
            width={464}
          />

          <div className="mt-[1rem] md:mt-[3rem] flex gap-[1rem] lg:gap-[2rem] ">
            <div className="flex flex-col sm:order-2 justify-center sm:justify-start items-center w-1/2 ">
              <Image 
                src={Banners}
                className='sm:-mt-[6rem] w-full h-auto '
                title='Registered Charity Certificate'
                alt='Registered Charity Certification'
                height={345}
                width={528}
              />
              
            </div>
            {/* Text */}
            <div className="flex flex-col sm:order-1 gap-[0.5rem] lg:gap-[1rem] text-white w-1/2">
              <h1 className='font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[2.5rem] leading-[1.5rem] md:leading-[1.7rem] lg:leading-[2.7rem] '>Commercial, Industrial and Production Cleaning Services in Tasmania</h1>
              {/* Blue cards */}
              <div className="hidden sm:flex mt-[1rem] md:mt-[2rem] flex-col gap-2 md:gap-4 text-white md:text-[1.2rem] ">
                <h4 className="py-1 px-4 bg-[#0181AC] w-[13rem] md:w-[15.5rem] font-medium text-center ">Uncompromised Quality</h4>
                <h4 className="py-1 px-4 bg-[#0181AC] w-[13rem] md:w-[15.5rem] font-medium text-center">Maximum Social Impact</h4>
              </div>
            </div>
          </div>

          {/* Blue cards */}
          <div className="sm:hidden mt-[1rem] flex flex-col gap-2 text-white">
            <h4 className="p-1 bg-[#0181AC] w-[13rem] text-[0.85rem] font-medium text-center ">Uncompromised Quality</h4>
            <h4 className="p-1 bg-[#0181AC] w-[13rem] text-[0.85rem] font-medium text-center">Maximum Social Impact</h4>
          </div>
        </div>
       
      </section>
    </article>
  )
}
