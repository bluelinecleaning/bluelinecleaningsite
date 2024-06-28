import React from 'react'
import Image from 'next/image'

// Assets
import WhiteLogo from '../../../assets/new_logo.png'
import Hero from '../../../assets/groupal.jpg'
import Iso1 from '../../../assets/iso-1.jpg'
import Iso2 from '../../../assets/iso-2.jpg'
import Charity from '../../../assets/charity.png'
import Circles from '../../../assets/white_circles_logo.png'
import Banners from '../../../assets/banner.png'

export default function Intro() {
  return (
    <article className='lg:relative w-full fira h-[22.5rem] sm:h-[27.5rem] md:h-[40.5rem] lg:h-[40.5rem] opacity-80'>
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
        <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>  
      </div>

      <section className=" page h-full md:flex md:items-center ">
        <div>
          <Image 
            src={WhiteLogo}
            className='h-[6.5rem] lg:h-[8rem] xl:h-[12rem] xl:mx-auto w-auto'
            title='Blueline Cleaning Logo'
            alt='Blueline Cleaning Logo'
          />
          <div className="mt-[1rem] md:mt-[3rem] flex gap-[2rem] lg:gap-[4rem] ">
            <div className="flex flex-col justify-center items-center w-2/5 lg:w-1/5 ">
              <Image 
                src={Banners}
                className='w-[10rem] sm:w-[12rem] lg:w-[16rem] h-auto '
                title='Registered Charity Certificate'
                alt='Registered Charity Certification'
              />
            </div>
            {/* Text */}
            <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem] text-white w-3/5">
              <h1 className='font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[2.5rem] leading-[1.5rem] md:leading-[1.7rem] lg:leading-[2.7rem] '>Registered Charity Organization Providing Cleaning Solutions Across Tasmania</h1>
              <h3 className='md:text-[1.2rem] lg:text-[1.5rem] leading-[1.2rem] md:leading-[1.4rem] lg:leading-[1.7rem] '>
                Your mess supports our mission!
              </h3>
            </div>
          </div>
        </div>
       
      </section>
        <Image 
          src={Circles} 
          className='hidden lg:flex absolute bottom-0 right-0 opacity-55 lg:w-[10rem]'
          title='Blueline Branding'
          alt='Blueline logo'
        />
    </article>
  )
}
