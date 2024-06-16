import React from 'react'
import Image from 'next/image'

// Assets
import Team from '../../../assets/cleaning-team.png'

export default function Impact() {
  return (
    <section className=' bg-gradient-to-b from-blueBranding to-[#2896FC] border-b border-blueBranding' id='impact'>
        <div className='page flex flex-col gap-[1rem]'>
            <h3 className='font-bold text-white text-[1.875rem] leading-[2rem] text-center '>Maximum Impact!</h3>
            <p className='text-white text-[0.875rem]'>Our legacy is built on a commitment to supporting diverse communities and fostering inclusive workplaces. Building on this foundation, we have now expanded our mission with the launch of Blueline Cleaning, delivering top-tier cleaning services that meet the highest standards of hygiene and professionalism.</p>
        </div>
        <Image 
            src={Team}
            className='w-full h-full object-cover'
            title='Blueline Cleaning Team'
            alt='Blueline Cleaning Team'
        />
       
    </section>
  )
}