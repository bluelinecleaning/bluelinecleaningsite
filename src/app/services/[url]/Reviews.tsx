import React from 'react'
import Image from 'next/image'

// Assets
import Stars from '../../../../assets/services/stars.png'

export default function Reviews({service}: any) {
  
    return (
    <article>
        <div className="relative page md:py-[5rem] ">
            <div className='py-[2rem]'>
                <h2 className='mainTitle text-blueBranding font-bold'>What Our Customers Say</h2>
                
                <div className='mt-[1rem] md:mt-[4rem] md:flex md:justify-center md:gap-[8rem]'>
                    {/* First review */}
                    <div className="md:w-1/3 flex flex-col items-center gap-4 ">
                        <Image 
                            src={Stars}
                            className='w-[5rem] opacity-80 '
                            title='Five stars icon'
                            alt='Five stars icon'
                        />
                        <p className='text-justify italic'>{service?.review1}</p>
                        <div className=" flex flex-col w-full items-end ">
                            <p className='font-bold leading-3 '>{service.reviewer1}</p>
                            <p>{service.reviewer1Position}</p>
                        </div>
                    </div>

                    {/* Divisor line */}
                    <div className="md:hidden my-[2rem] mx-auto h-[0.05rem] w-2/3 bg-gradient-to-r from-blueBranding via-gray-200 to-blueBranding  "></div>
                    
                    {/* Second review */}
                    <div className="md:w-1/3 flex flex-col items-center gap-4 ">
                        <Image 
                            src={Stars}
                            className='w-[5rem] opacity-80 '
                            title='Five stars icon'
                            alt='Five stars icon'
                        />
                        <p className='text-justify italic'>{service?.review2}</p>
                        <div className=" flex flex-col w-full items-end ">
                            <p className='font-bold leading-3 '>{service.reviewer2}</p>
                            <p>{service.reviewer2Position}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </article>
  )
}
