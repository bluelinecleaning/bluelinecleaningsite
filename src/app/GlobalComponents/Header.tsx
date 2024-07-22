'use client'

// Dependencies
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackGAEvent } from '../metrics/GoogleAnalytics'

// Assets
import Logo from '../../../assets/logo3.svg'


export default function Header() {

  // State hooks
  const [mobileMenu, setMobileMenu] = useState(false);
    
  const [servicesDisplay, setServicesDisplay] = useState(false);

  const [services, setServices] = useState([])

  //  Functions
  const toggleMenu = () => {
      setMobileMenu(!mobileMenu);
  };
  
  const toggleServicesOptions = () => {
      setServicesDisplay(!servicesDisplay);
  };


  // GA Event listener
  function handleEvent(event:any) {
    trackGAEvent("Contact", "Call Blueline team", "Call");
    // handle the actual form submission here
  }

  return (
    <header className={`fixed lg:sticky z-50 opacity-95 bg-white w-full rounded-b-lg ${mobileMenu === false ? 'shadow-2xl border-b border-blueBranding': ''}`}>
      <div className='fira px-[1rem] py-[1rem] sm:mx-auto sm:px-[2rem] md:px-[4rem] lg:px-[6rem] flex items-center lg:justify-between'>
        <Link href='/' onClick={() => setMobileMenu(false)} >
          <Image 
            className='w-[7rem] md:object-cover'
            src={Logo}
            alt='Blueline Logo'
            title='Blueline Logo'
            width={176}
            height={73}
          />
        </Link>
        <button
          id='menu-button'
          className='lg:hidden cursor-pointer relative ml-auto'
          aria-label='Toogle mobile menu'
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu === false ? (
            <svg className="h-[2rem] w-[2.33rem] text-blueBranding"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          ) : (
              <svg 
                onClick={() => {
                    setServicesDisplay(false)
                }} 
                className="h-[2rem] w-[2.33rem] text-blueBranding"  fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
          )}
        </button>

        {/* Nav bar desktop */}
        <div className='hidden lg:flex'>
          <nav className='flex gap-[4rem]'>
            <ul className="flex justify-between items-center gap-[1rem] text-blueBranding font-bold text-[1rem] hover:cursor-pointer">
              <li className='hover:text-gray-400'><Link href={'/'}>HOME</Link></li>
              <li className='hover:text-gray-400'><Link href={'/#what'}>SERVICES</Link></li>
              <li className='hover:text-gray-400'><Link href={'https://www.blueline-laundry.com/'} target='_blank'>LAUNDRY</Link></li>
              <li className='hover:text-gray-400'><Link href={'/our-history'}>OUR HISTORY</Link></li>
              <li className='hover:text-gray-400'><Link href={'/#contact'}>CONTACT</Link></li>  
            </ul>
            <a href='tel:+61468816441' onClick={handleEvent} className=' flex items-center gap-2 bg-blueBranding text-white py-2 px-4 rounded w-min ml-auto hover:bg-white hover:text-blueBranding hover:font-bold ease-in-out duration-300  '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <p>0468816441</p>
            </a>
          </nav>
        </div>

        {/* Nav bar mobile */}
        {mobileMenu && (
          <div className={`bg-white -ml-4 sm:-ml-[2rem] md:-ml-[4rem] lg:-ml-[6rem] absolute z-50 page top-[4rem] md:top-[4rem] lg:top-[9.3rem] rounded-lg border-b border-b-blueBranding shadow-2xl w-full flex flex-col justify-center origin-top ${mobileMenu === true ? 'animate-open-menu': 'animate-close-menu'} `}>
            <nav className='py-[2rem] text-blueBranding'>
              <ul className='font-bold mb-8 lg:mb-[4rem] text-[1.2rem] lg:text-[1.8rem] flex flex-col gap-[0.5rem] lg:gap-[0.8rem]'>
                <li onClick={() => toggleMenu()}><Link href={'/'}>HOME</Link></li>
                <li onClick={() => toggleMenu()}><Link href={'/#what'}>SERVICES</Link></li>
                <li className='hover:text-gray-400'><Link href={'https://www.blueline-laundry.com/'} target='_blank'>LAUNDRY</Link></li>
                <li onClick={() => toggleMenu()}><Link href={'/our-history'}>OUR HISTORY</Link></li>
                <li onClick={() => toggleMenu()}><Link href={'/#contact'}>CONTACT</Link></li>
              </ul>
              <a href='tel:+61468816441' className=' mx-auto flex items-center gap-2 bg-blueBranding shadow-lg shadow-blueBranding text-white py-2 px-4 rounded w-min lg:text-[1.5rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <p>0468816441</p>
              </a>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}

