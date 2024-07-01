'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


// Assets
import { ServicesArray } from './(constants)/services'

export default function What() {
  
    const [currentService, setCurrentService] = useState<number>()
  
    return (
    <main className='pt-[3rem] md:pt-[5rem] lg:pt-[8rem] w-full bg-gradient-to-b from-[#2896FC] to-[#0181AC]' id='what'>
        <article className='px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] pb-[3rem] lg:pb-[6rem] fira'>
            <h2 className='mainTitle text-white'>Not Just What We Do, it’s Why We Do It</h2>
            {/* Text */}
            <div className="mt-[2rem] md:mt-[3rem] lg:mt-[6rem] 2xl:w-3/4 2xl:mx-auto flex flex-col gap-[1rem] text-white text-justify">
                <p className='narrative'>Blueline has a rich history of uncompromised <span className='text-orange-300 font-bold'>commercial excellence</span> as a foundation to our social impact purpose. As a registered charity and social enterprise, we&apos;ve been dedicated to creating <span className='text-orange-300 font-bold'>meaningful employment</span> opportunities for people of all abilities, backgrounds and cultures for over 130 years. </p>
                <p className='narrative'>Building on this strong foundation, we&apos;ve expanded our services to include commercial, industrial and domestic <span className='text-orange-300 font-bold'>cleaning services</span>. Your cleaning and hygiene needs are met with the highest level of professionalism, all whilst growing our social purpose. </p>
                <p className='narrative'>Check out our range of services and get in touch with us today to enjoy the benefits of our commercial expertise, and join us in creating positive social impact for all Tasmanians.</p>
            </div>
            
            {/* Cards */}
            <section className='mt-[2rem] md:mt-[4rem] lg:mt-[6rem] 2xl:w-3/4 2xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                {ServicesArray.map((service => (
                   <div 
                        key={service.id}
                        className='h-[20rem] lg:h-[26rem] mx-auto bg-white relative max-w-xs overflow-hidden border border-gray-300 shadow-gray-600 shadow-xl group'
                    >
                        <Image 
                            src={service.image}
                            alt={`${service.title} service`}
                            className="h-[18rem] lg:h-[21rem] object-cover transition-transform group-hover:scale-125 lg:group-hover:scale-150  duration-500"
                        />
                        <h3 className='px-1 py-1 lg:py-2 2xl:pt-6 font-bold text-center text-blueBranding lg:text-[1.4rem] lg:leading-[1.6rem] '>{service.title}</h3>
                        <div className="absolute inset-0 flex items-end bg-gradient-to-b from-black/80 via-blueBranding/80 to-black/80 transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                            <div className="p-4 text-white flex flex-col md:gap-2">
                                <h3 className='font-bold text-[1.3rem] md:text-[1.5rem] 2xl:text-[1.8rem] md:leading-[1.7rem] 2xl:leading-[2rem]'>{service.title}</h3>
                                <p className='lg:text-[1.2rem] lg:leading-[1.6rem]'>{service.short}</p>
                                <Link 
                                    className='mt-2 text-center mx-auto lg:text-[1.2rem]' onClick={() => setCurrentService(service.id)}
                                    href={service.id === 5 ? 'https://www.blueline-laundry.com/' : `/services/${service.url}`}
                                    target={service.id === 5 ? '_blank' : '_self'}
                                >
                                    See more
                                </Link>
                            </div>
                        </div>
                    </div>
                )))}
            </section>
        </article>         
  
    </main>
  )
}
