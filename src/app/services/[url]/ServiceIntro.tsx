import Image from 'next/image'
import React from 'react'

// Assets

export default function ServiceIntro( {service}: any) {
  
    return (
    <article className='lg:relative w-full fira h-[22.5rem] sm:h-[27.5rem] md:h-[40.5rem] lg:h-[40.5rem] opacity-80'>

        {/* Bg image */}
      <div className="-z-30 absolute inset-0 h-[30.5rem] sm:h-[35.5rem] md:h-[48.5rem] lg:h-auto ">
        <Image 
            className=' w-full h-full object-cover '
            src={service.image} 
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
            <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem] text-white w-full">
              <h1 className='font-bold text-[1.8rem] md:text-[1.5rem] lg:text-[2.5rem] leading-[2rem] md:leading-[1.7rem] lg:leading-[2.7rem] text-center '>{service.title}</h1>
              <div className="mt-[2rem] flex flex-col gap-2">
                <p className='leading-[1.3rem]'>{service.description}</p>
              </div>
            </div>
        </div>
      </section>
    </article>
  )
}
