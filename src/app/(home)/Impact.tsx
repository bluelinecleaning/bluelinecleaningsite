import React from 'react'
import Image from 'next/image'

// Assets
import Team from '../../../assets/cleaning-team.png'
import BiggerTeam from '../../../assets/cleaning-team-bigger.png'

export default function Impact() {
  return (
    <section className=' bg-gradient-to-b from-blueBranding to-[#2896FC] border-b border-blueBranding' id='impact'>
      <div className='page md:pt-[5rem] lg:pt-[8rem] flex flex-col gap-[1rem] md:gap-[3rem] lg:gap-[6rem]'>
        <h3 className='mainTitle text-white'>Maximum Impact!</h3>
        <p className='text-white narrative'>Our legacy is built on a commitment to supporting diverse communities and fostering inclusive workplaces. Building on this foundation, we have now expanded our mission with the launch of Blueline Cleaning, delivering top-tier cleaning services that meet the highest standards of hygiene and professionalism.</p>
      </div>
      <div className="flex items-end justify-between sm:mt-[2rem] md:mt-[3rem] lg:mt-[6rem]  ">
        <Image 
          src={Team}
          className='lg:hidden w-full h-full object-cover'
          title='Blueline Cleaning Team'
          alt='Blueline Cleaning Team'
        />
        <Image 
          src={Team}
          quality={100}
          className='hidden lg:block w-full h-full object-cover'
          title='Blueline Cleaning Team'
          alt='Blueline Cleaning Team'
        />
      </div>
      
    </section>
  )
}
