'use client'

import React from 'react'
import Image from 'next/image'


// Assets
import { ServicesArray } from './(constants)/services'

export default function What() {
  return (
    <main className='py-[3rem] w-full bg-gradient-to-r from-[#2896FC] to-[#0181AC]'>
        <article className='page fira'>
            <h2 className='font-bold text-white text-[1.875rem] leading-[2rem] text-center'>What We Do?</h2>
            <section className='mt-[2rem] grid grid-cols-1 gap-[2rem]'>
                {ServicesArray.map((service => (
                   <div 
                        key={service.id}
                        className='h-[20rem] bg-white relative max-w-xs overflow-hidden rounded-2xl shadow-2xl group'
                    >
                        <Image 
                            src={service.image}
                            alt={`${service.title} service`}
                            className="h-[18rem] object-cover transition-transform group-hover:scale-125 duration-500"
                        />
                        <h3 className='py-1 font-bold text-center text-blueBranding'>{service.title}</h3>
                        <div className="absolute inset-0 flex items-end bg-gradient-to-b from-black/80 via-black/20 to-black/80 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                            <div className="p-4 text-white">
                                <h3 className='font-bold text-[1.3rem]'>{service.title}</h3>
                                <p className=''>{service.short}</p>
                            </div>
                        </div>
                    </div>
                )))}
            </section>
        </article>
         
  
    </main>
  )
}
