import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Logo from '../../../assets/Blueline-logo-24.png'
import Facebook from '../../../assets/facebook.png'
import Linkedin from '../../../assets/linkedin.png'
import Youtube from '../../../assets/social.png'
import Instagram from '../../../assets/instagram.png'


export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-100 to-gray-300'>
      <div className="page fira text-blueBranding flex flex-col gap-[0.5rem] md:gap-[1rem] ">
        <Image 
          src={Logo}
          className='w-[7rem] md:w-[10rem] lg:w-[13rem] mx-auto'
          title='Blueline Logo'
          alt='Blueline Logo'
        />
        <p className='text-center text-[0.875rem] leading-[1rem] lg:text-[1rem] lg:leading-[1.275rem] '>130 years of service to the people of Tasmania, maintaining a focus toward supporting people with disabilities and traumas.</p>
        <p className='font-bold text-center text-[0.875rem] md:text-[1.2rem] lg:text-[1.5rem]'>Connect with us</p>
        <div className="flex items-center justify-center gap-1 md:gap-2">
          <Link href={'https://www.facebook.com/bluelinelaundry/'} target='_blank'>
            <Image 
              src={Facebook}
              className='w-[2rem] h-auto rounded-full '
              title='Facebook logo icon'
              alt='Facebook logo icon'
            />
          </Link>
          <Link href={'https://au.linkedin.com/company/blueline-laundry-inc'} target='_blank'>
            <Image 
              src={Linkedin}
              className='w-[2rem] h-auto rounded-full'
              title='LinkedIn logo icon'
              alt='LinkedIn logo icon'
            />
          </Link>
          <Link href={'https://www.youtube.com/channel/UCBVCnGHMxyLsn56BWoSHkCw/videos'} target='_blank'>
            <Image 
              src={Youtube}
              className='w-[2rem] h-auto rounded-full bg-blueBranding'
              title='LinkedIn logo icon'
              alt='LinkedIn logo icon'
            />
          </Link>
          {/* <Link href={'https://www.youtube.com/channel/UCBVCnGHMxyLsn56BWoSHkCw/videos'} target='_blank'>
            <Image 
              src={Instagram}
              className='w-[2rem] h-auto rounded-full bg-blueBranding'
              title='LinkedIn logo icon'
              alt='LinkedIn logo icon'
            />
          </Link> */}
        </div>
        {/* Call button */}
        <Link 
          href={'/#contact'}
            className='mt-[1rem] flex items-center gap-2 bg-blueBranding text-white py-2 px-4 lg:px-8 rounded mx-auto shadow-lg '
        >
          CONTACT US
        </Link>

        <p className='mt-[1rem] text-center text-[0.875rem] leading-[1rem] lg:text-[1rem] lg:leading-[1.275rem]'><span className='font-bold'>HOBART (nipaluna Country)</span> 59-61 Creek Road,  New Town, Tasmania Australia 7008 </p>
        <p className='mt-[0.5rem] text-center text-[0.8rem] lg:text-[1rem] '>© 2024 Blueline. All Rights Reserved.</p>
      </div>
      
    </footer> 
  )
}
