import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Logo from '../../../assets/Blueline-logo-24.png'
import Iso1 from '../../../assets/iso-1.jpg'
import Iso2 from '../../../assets/iso-2.jpg'
import Charity from '../../../assets/charity.png'
import Ndis from '../../../assets/ndis.svg'


export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-100 to-gray-300'>
      <div className="page fira text-blueBranding flex flex-col gap-[0.5rem] ">
        <Image 
          src={Logo}
          className='w-[7rem] mx-auto'
          title='Blueline Logo'
          alt='Blueline Logo'
        />
        <p className='text-center text-[0.875rem] leading-[1rem] '>130 years of service to the people of Tasmania, maintaining a focus toward supporting people with disabilities and traumas.</p>
        <p className='font-bold text-center text-[0.875rem]'>Connect with us</p>
        <div className="flex items-center justify-center gap-1">
          <Link href={'https://www.facebook.com/bluelinelaundry/'} target='_blank'><svg className="h-8 w-8 bg-blueBranding text-white rounded-2xl p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link>
          <Link href={'https://au.linkedin.com/company/blueline-laundry-inc'} target='_blank'><svg className="h-8 w-8 bg-blueBranding text-white rounded-2xl p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></Link>
        </div>
        {/* Call button */}
        <a href='tel:+61428994431' className='mt-[1rem] flex items-center gap-2 bg-blueBranding text-white py-2 px-4 rounded w-min mx-auto shadow-lg shadow-blueBranding hover:bg-white hover:text-blueBranding hover:font-bold ease-in-out duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <p>0428994431</p>
        </a>

        <p className='mt-[1rem] text-center text-[0.875rem] leading-[1rem]'><span className='font-bold'>HOBART (nipaluna Country)</span> 59-61 Creek Road,  New Town, Tasmania Australia 7008 </p>
        <p className='mt-[0.5rem] text-center text-[0.8rem]'>© 2024 Blueline. All Rights Reserved.</p>
      </div>
      
    </footer> 
  )
}
