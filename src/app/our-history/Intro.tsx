import Image from 'next/image'
import React from 'react'

// Assets
import Hero from '../../../assets/Histoy-hero.jpg'

export default function Intro() {
  
    const foundingYear = 1893;
    const currentYear = new Date().getFullYear();
    const age = currentYear - foundingYear;
  
    return (
    <article className='lg:relative w-full fira h-[22.5rem] sm:h-[27.5rem] md:h-[40.5rem] lg:h-[40.5rem] opacity-80'>
        {/* Bg image */}
      <div className="-z-30 absolute inset-0 h-[30.5rem] sm:h-[35.5rem] md:h-[48.5rem] lg:h-auto ">
        <Image 
          className=' w-full h-full object-cover object-left '
          src={Hero} 
          title='Hero image'
          alt='Hero image, hands holding with support'
          fill
          sizes='100vw'
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>  
      </div>

      <section className=" page h-full flex items-center ">
        <div> 
            {/* Text */}
            <div className="flex flex-col gap-[0.5rem] md:gap-[2rem] text-white w-full">
              <h1 className='font-bold md:text-[1.5rem] md:leading-[1.8rem] lg:px-[4rem] lg:mx-auto '>Our Story</h1>
              <div className="flex flex-col w-[17rem] ">
                <p className='font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[2rem] md:leading-[3rem] lg:leading-[4rem] '>{age} Years of Service to Our Community</p>
              </div>
            </div>
        </div>
      </section>
    </article>
  )
}
