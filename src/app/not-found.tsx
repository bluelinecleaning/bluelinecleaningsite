import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import BiggerTeam from '../../assets/cleaning-team-bigger.png'

export default function NotFound() {
  return (
    <div className='bg-blueBranding min-h-screen -mt-[8rem] '>
        <main className='page '>
            <div className="mt-[7rem] md:mt-[10rem] lg:mt-[15rem] ">
                {/* Left container for lg */}
                <div className='flex flex-col gap-[2.5rem] sm:gap-[4rem] text-center text-white'>
                    <h1 className=' cormorant text-[3.75rem] leading-[3.2rem] font-bold'>LOST AT SEA?</h1>
                    <h2 className=' text-[3rem] font-extrabold'>404</h2>
                    <p className=' font-semibold md:text-[1.25rem]'>Don&apos;t worry, you&apos;re not alone! Our new site is navigating uncharted waters. </p>
            
                    
                    <p className=' font-semibold md:text-[1.5rem]'>Explore our services to find your way back to shore!</p>
                    <Link className='sm:mt-[3rem] md:flex justify-center ' aria-label='Go to Services section' href={'/#what'} scroll >
                        <button className='w-full sm:w-2/3 xl:w-[31.25rem] xl:mr-0 bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74]  py-[0.5rem] lg:py-[1rem] rounded-lg text-black text-[1.125rem] font-semibold'>
                            Visit Services
                        </button>
                    </Link>

                </div>
            </div>
        </main>
         {/* Image for lg */}
         <Image 
            src={BiggerTeam}
            quality={100}
            className='hidden mt-[5rem] lg:block w-full h-[30rem] object-cover object-top'
            title='Blueline Cleaning Team'
            alt='Blueline Cleaning Team'
        />
    </div>
  )
}
