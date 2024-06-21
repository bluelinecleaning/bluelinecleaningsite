'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Components
import ServiceExplanation from './(components)/ServiceExplanation'

// Assets
import { ServicesArray } from './(constants)/services'

export default function What() {
  
    const [currentService, setCurrentService] = useState<number>()
  
    return (
    <main className='pt-[3rem] md:pt-[5rem] w-full bg-gradient-to-r from-[#2896FC] to-[#0181AC]' id='what'>
        <article className='px-[1rem] sm:px-[2rem] pb-[3rem] fira'>
            <h2 className='font-bold text-white text-[1.875rem] md:text-[2.3rem] leading-[2rem] text-center'>What We Do?</h2>
            <section className='mt-[2rem] md:mt-[4rem] grid grid-cols-1 sm:grid-cols-2 gap-[2rem]'>
                {ServicesArray.map((service => (
                   <div 
                        key={service.id}
                        className='h-[20rem] mx-auto bg-white relative max-w-xs overflow-hidden rounded-2xl border border-gray-300 shadow shadow-white group'
                    >
                        <Image 
                            src={service.image}
                            alt={`${service.title} service`}
                            className="h-[18rem] object-cover transition-transform group-hover:scale-125 duration-500"
                        />
                        <h3 className='py-1 font-bold text-center text-blueBranding'>{service.title}</h3>
                        <div className="absolute inset-0 flex items-end bg-gradient-to-b from-black/80 via-blueBranding/80 to-black/80 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                            <div className="p-4 text-white flex flex-col md:gap-2">
                                <h3 className='font-bold text-[1.3rem] md:text-[1.5rem] md:leading-[1.7rem]'>{service.title}</h3>
                                <p className=''>{service.short}</p>
                                <Link 
                                    className='mt-2 text-center mx-auto' onClick={() => setCurrentService(service.id)}
                                    href={`/#serviceDetails`}
                                >
                                    See more
                                </Link>
                            </div>
                        </div>
                    </div>
                )))}
            </section>
        </article>
        <article>
            <ServiceExplanation service={currentService} />
        </article>
         
  
    </main>
  )
}
