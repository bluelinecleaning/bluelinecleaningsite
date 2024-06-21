'use client'

// Dependencies
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Assets
import Logo from '../../../assets/blue-logo.png'


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


  return (
    <header className={`fixed z-50 opacity-95 bg-white w-full rounded-b-lg ${mobileMenu === false ? 'shadow-2xl border-b border-blueBranding': ''}`}>
      <div className='fira px-[1rem] py-[1rem] sm:mx-auto sm:px-[2rem] md:px-[4rem] flex items-center xl:justify-between'>
        <Link href='/'>
          <Image 
            className='w-[3rem] md:w-[4.5rem] md:object-cover'
            src={Logo}
            alt='Blueline Logo'
            title='Blueline Logo'
            width={176}
            height={73}
          />
        </Link>
        <button
          id='menu-button'
          className='xl:hidden cursor-pointer relative ml-auto'
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
        <div className='hidden xl:flex'>
          <nav className='flex  gap-[4rem]'>
            <ul className="flex justify-between items-center gap-[1rem] text-blueBranding font-bold text-[1rem] hover:cursor-pointer">
              <li className='hover:scale-105'><Link href={'/'}>HOME</Link></li>
              <li className='hover:scale-105'>OUR CLEANING SERVICES</li>
              <li className='hover:scale-105'>OUR PEOPLE</li>
              <li className='hover:scale-105'>CONTACT</li>  
            </ul>
            <a href='tel:+61428994431' className=' flex items-center gap-2 bg-blueBranding text-white py-2 px-4 rounded w-min ml-auto hover:bg-white hover:text-blueBranding hover:font-bold ease-in-out duration-300  '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <p>0428994431</p>
            </a>
          </nav>
        </div>

        {/* Nav bar mobile */}
        {mobileMenu && (
          <div className={`bg-white -ml-4 sm:-ml-[2rem] md:-ml-[4rem] lg:-ml-[6rem] absolute z-50 page top-[5rem] rounded-lg bg-primary border-b border-b-blueBranding shadow-2xl w-full flex flex-col justify-center origin-top ${mobileMenu === true ? 'animate-open-menu': 'animate-close-menu'} `}>
            <nav className='py-[2rem] text-blueBranding'>
              <ul className='font-bold mb-8 text-[1.2rem] flex flex-col gap-[0.5rem]'>
                <li onClick={() => toggleMenu()}><Link href={'/'}>HOME</Link></li>
                <li onClick={() => toggleMenu()}><Link href={'/#what'}>OUR CLEANING SERVICES</Link></li>
                <li onClick={() => toggleMenu()}><Link href={'/#impact'}>OUR PEOPLE</Link></li>
                <li onClick={() => toggleMenu()}>CONTACT</li>
              </ul>
              <a href='tel:+61428994431' className=' mx-auto flex items-center gap-2 bg-blueBranding shadow-lg shadow-blueBranding text-white py-2 px-4 rounded w-min'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <p>0428994431</p>
              </a>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}

