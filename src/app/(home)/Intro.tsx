import React from 'react'
import Image from 'next/image'

// Assets
import WhiteLogo from '../../../assets/new_logo.png'
import Hero from '../../../assets/groupal.jpg'
import Iso1 from '../../../assets/iso-1.jpg'
import Iso2 from '../../../assets/iso-2.jpg'
import Charity from '../../../assets/charity.png'
import Circles from '../../../assets/white_circles_logo.png'

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
            className='h-[6.5rem] lg:h-[8rem] w-auto'
            title='Blueline Cleaning Logo'
            alt='Blueline Cleaning Logo'
          />
          <div className="mt-[1rem] md:mt-[3rem] flex gap-[2rem] lg:gap-[4rem] ">
            <div className="flex flex-col gap-[1rem] w-2/5">
              {/* Logos */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0 rounded-xl">
                <Image 
                  src={Iso1}
                  className='w-[4rem] sm:w-[4.5rem] lg:w-[6rem] h-auto sm:mx-auto'
                  title='ISO 14001 Certificate'
                  alt='ISO 14001 Certification'
                />
                <Image 
                  src={Iso2}
                  className='w-[4rem] sm:w-[4.5rem] lg:w-[6rem] h-auto sm:mx-auto'
                  title='ISO 9001 Certificate'
                  alt='ISO 9001 Certification'
                />
                <Image 
                  src={Charity}
                  className='sm:mt-[1rem] w-[4rem] sm:w-[6rem] lg:w-[8rem] h-auto col-span-2 mx-auto'
                  title='Registered Charity Certificate'
                  alt='Registered Charity Certification'
                />

              </div>
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
