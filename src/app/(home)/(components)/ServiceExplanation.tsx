'use client'

import Image from 'next/image'
import React from 'react'

// Assets
import Hero from '../../../../assets/hero2.jpg'
import { ServicesArray } from '../(constants)/services'

export default function ServiceExplanation({ service }:any) {

  const activeService = ServicesArray.find(s => s.id === service)
  console.log(activeService)

  return (
    <article 
      className='' 
      id='serviceDetails' 
    >
      {activeService ? (
        <section className='relative h-full '>
          {/* BG image */}
          <div className='absolute h-full w-full'>
            <Image 
              src={Hero}
              className='h-full w-full object-cover'
              title='Blueline picture'
              alt='Blueline picture'
            />
          </div>
          {/* Screen */}
          <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
          {/* Content */}
          <div className="p-[1rem] flex items-center relative">
            <div className='relative text-white'>
              <ul className='flex flex-col gap-2'>
                {activeService.options?.map((option) => (
                  <li key={option.id}>
                    <p className='text-[0.85rem]'>
                      <span className='font-semibold'>{option.optionTitle}:</span> {option.optionContent}
                    </p>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
        
    </article>
  )
}
