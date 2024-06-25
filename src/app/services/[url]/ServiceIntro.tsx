import Image from 'next/image'
import React from 'react'

// Assets

export default function ServiceIntro( {service}: any) {
  
    return (
    <article className='lg:relative w-full fira h-[22.5rem] sm:h-[27.5rem] md:h-[40.5rem] lg:h-[40.5rem] opacity-80'>

      {/* Bg image */}
      <div className="-z-30 absolute inset-0 h-[30.5rem] sm:h-[35.5rem] md:h-[48.5rem] lg:h-auto ">
        <Image 
          className='md:hidden w-full h-full object-cover '
          src={service.image} 
          title='Hero image'
          alt='Hero image, hands holding with support'
          fill
          sizes='100vw'
          priority={true}
        />
        <Image 
          className='hidden md:block w-full h-full object-cover '
          src={service.hero} 
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
            {/* Text */}
            <div className="flex flex-col gap-[0.5rem] md:gap-[2rem] text-white w-full">
              <h1 className='font-bold text-[1.8rem] md:text-[3rem] lg:text-[4rem] leading-[2rem] md:leading-[3rem] text-center '>{service.title}</h1>
              <div className="mt-[2rem] flex flex-col gap-2">
                <p className='md:text-[1.5rem] md:leading-[1.8rem] lg:px-[4rem] lg:mx-auto lg:text-center '>{service.description}</p>
              </div>
            </div>
        </div>
      </section>
    </article>
  )
}
