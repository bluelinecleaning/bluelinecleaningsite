import React from 'react'
import Image from 'next/image'

// Assets
import Logo from '../../../assets/Blueline-logo-24.png'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-100 to-gray-300'>
      <div className="page flex justify-between items-center gap-2 ">
        <Image
          src={Logo}
          className='w-[7rem]'
          title='Blueline logo'
          alt='Blueline logo'
        />
        <p className='text-[0.5rem]'>© 2024 Blueline. All Rights Reserved.</p>
        <div className="flex items-center justify-end gap-1">
          <svg className="h-6 w-6 bg-blueBranding text-white rounded-2xl p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          <svg className="h-6 w-6 bg-blueBranding text-white rounded-2xl p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
        </div>
      </div>
    </footer> 
  )
}
