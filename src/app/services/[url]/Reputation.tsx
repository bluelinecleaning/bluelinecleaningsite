import React from 'react'
import Image from 'next/image'

// Assets
import Hands from '../../../../assets/services/teamwork.png'


export default function Reputation() {
  return (
    <section className='relative page bg-gradient-to-r from-[#2896FC] to-[#0181AC] text-white'>
        <div className="pt-[2rem] pb-[1rem]">
            <h4 className='text-[1.8rem] lg:text-[2.1rem] leading-[2.1rem] lg:leading-[2.3rem] lg:w-[25rem]'>We know that our quality is your reputation...</h4>
            <p className='mt-[1rem] font-bold text-[1.3rem] lg:text-[1.6rem] '>and your reputation is safe with us!</p>
            <Image 
                src={Hands}
                className='mt-[1rem] md:mt-[2rem] mx-auto lg:top-[3rem] lg:right-[8rem] lg:absolute w-[6rem] h-auto object-cover '
                title='Hands united'
                alt='Hands united'
            />
        </div>
    </section>
  )
}
