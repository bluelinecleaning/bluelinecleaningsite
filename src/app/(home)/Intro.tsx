import React from 'react'
import Image from 'next/image'

// Assets
import Damian from '../../../assets/damian.png'
import WhiteLogo from '../../../assets/Logo-white.png'
import Certificates from '../../../assets/certificates.png'
import Hero from '../../../assets/groupal.jpg'

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
      <section className=" page mt-[4rem] h-full ">
        <div className=" flex gap-[2rem] items-center">
          <div className="flex flex-col w-2/5">
            <Image 
              src={WhiteLogo}
              className='h-[3.5rem] w-auto'
              title='Blueline Cleaning Logo'
              alt='Blueline Cleaning Logo'
            />
            <Image 
                src={Certificates}
                className='mt-[1rem] h-[4rem] w-auto mx-auto rounded-xl opacity-80 '
                title='Certificates logo'
                alt='Logos of ISO 9001, Registered Charity Organization and NDIS'
              />
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
