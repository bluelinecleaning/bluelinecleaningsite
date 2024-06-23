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
    <main className='pt-[3rem] md:pt-[5rem] lg:pt-[8rem] w-full bg-gradient-to-r from-[#2896FC] to-[#0181AC]' id='what'>
        <article className='px-[1rem] sm:px-[2rem]  md:px-[4rem] lg:px-[6rem] pb-[3rem] lg:pb-[8rem] fira'>
            <h2 className='mainTitle text-white'>What We Do?</h2>
            {/* Text */}
            <div className="mt-[2rem] md:mt-[3rem] lg:mt-[6rem] flex flex-col gap-[1rem] text-white">
                <p className='narrative'>Our commitment to <span className='text-orange-300 font-semibold'>quality cleaning services</span> is matched by our dedication to social impact. As a <span className='text-orange-300 font-bold'>registered charity</span> and <span className='text-orange-300 font-bold'>social enterprise</span>, we strive to create employment opportunities and support communities while delivering exceptional cleaning solutions. Our comprehensive range of services, from Commercial Cleaning to School Cleaning, ensures that every space we service is maintained to the <span className='text-orange-300 font-bold'>highest standards</span> of cleanliness and hygiene.</p>
                <p className='narrative'>Partner with Blueline to experience professional cleaning services that make a difference. Together, we can create cleaner, safer environments and contribute to meaningful social change. <span className='text-orange-300 font-bold'>Contact us </span>today to learn more about our services and how we can support your cleaning needs.</p>
            </div>
            <section className='mt-[2rem] md:mt-[4rem] lg:mt-[6rem] grid grid-cols-1 sm:grid-cols-2 gap-[2rem]'>
                {ServicesArray.map((service => (
                   <div 
                        key={service.id}
                        className='h-[20rem] lg:h-[26rem] mx-auto bg-white relative max-w-xs overflow-hidden rounded-2xl border border-gray-300 shadow shadow-white group'
                    >
                        <Image 
                            src={service.image}
                            alt={`${service.title} service`}
                            className="h-[18rem] lg:h-[21rem] object-cover transition-transform group-hover:scale-125 lg:group-hover:scale-150  duration-500"
                        />
                        <h3 className='py-1 lg:py-2 font-bold text-center text-blueBranding lg:text-[1.7rem] lg:leading-[1.9rem] '>{service.title}</h3>
                        <div className="absolute inset-0 flex items-end bg-gradient-to-b from-black/80 via-blueBranding/80 to-black/80 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                            <div className="p-4 text-white flex flex-col md:gap-2">
                                <h3 className='font-bold text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] md:leading-[1.7rem] lg:leading-[2rem]'>{service.title}</h3>
                                <p className='lg:text-[1.2rem]'>{service.short}</p>
                                <Link 
                                    className='mt-2 text-center mx-auto lg:text-[1.2rem]' onClick={() => setCurrentService(service.id)}
                                    href={`/services/${service.url}`}
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
