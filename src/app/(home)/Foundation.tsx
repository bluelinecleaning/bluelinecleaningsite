'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Features from './(components)/Features';
import { ValuesArray } from './(constants)/Values';

// Assets
import Mock1 from "../../../assets/mock-image-1.jpg"
import Mock2 from '../../../assets/values-hero.jpg'

const Foundation = () => {
 
  return (
  <article className='bg-gray-100 fira py-[2rem] lg:py-[6rem]'>
    
    <div className='page 2xl:w-3/4 2xl:mx-auto'>
        <h3 className='font-bold mainTitle text-blueBranding'>ABOUT BLUELINE</h3>
        <div className='pt-[2rem] md:pt-[3rem] lg:pt-[6rem] narrative flex flex-col gap-[0.5rem] text-justify '>
            <p className=''>Blueline was founded over a century ago with a mission to provide employment and <span className='text-blueBranding font-bold'>support</span> to those in need. Our journey has been marked by a steadfast dedication to <span className='text-blueBranding font-bold'>social good</span>, empowering individuals through fully integrated and inclusive workplace environments.</p>
            <Image 
                src={Mock1}
                className=' h-[13rem] sm:h-[20.5rem] lg:hidden object-cover '
                title='Blueline Laundry worker'
                alt='Blueline Laundry worker'
            />
            <p>Our <span className='text-blueBranding font-bold'>Supported Employment Program</span> enables team members with disabilities to access real work in real work locations. Supported workers are involved across all areas of our <Link href={'https://www.blueline-laundry.com/'} target='_blank' className=' underline text-blue-600' >laundry</Link>  and cleaning rosters, working alongside staff to ensure support is available whenever needed.</p>
            <p>Blueline is committed to empowering all staff to achieve their full potential. We provide comprehensive training with opportunities to gain nationally recognized qualifications. The benefits of working at Blueline extend beyond the workplace, fostering greater independence, social activities, and community involvement.</p>
            <Image 
                src={Mock2}
                className=' h-[13rem] sm:h-[20.5rem] lg:hidden object-cover object-left-top '
                title='Blueline Laundry worker'
                alt='Blueline Laundry worker'
            />
            <p><span className='text-blueBranding font-bold'>Our mission</span> is to enhance people&apos;s lives and build resilience by providing rewarding career opportunities for those marginalized from mainstream employment. We <span className='text-blueBranding font-bold'>focus</span> on supporting people with disabilities, migrants, and individuals who have experienced trauma.</p>
            <p>As we expand our enterprise to include <span className='text-blueBranding font-bold'>high-quality cleaning services</span>, we continue to uphold these values. Our commitment to quality and affordability is second to none. We understand that by growing our commercial services, we can maximize our social purpose and create even more positive impact.</p>
        </div>
    </div>

    <h3 className='mt-[2rem] lg:mt-[6rem] mainTitle'>OUR VALUES</h3>
    <div className="px-[1rem] lg:px-[6rem] 2xl:w-3/4 2xl:mx-auto flex w-full items-center gap-[1rem]">
        <section className="w-2/5 py-[5vh]">
            <ul>
                {ValuesArray.map((value) => (
                    <li key={value.id}>
                        <Features id={value.id} >
                            {value.valueTitle}
                        </Features>
                    </li>
                ))}
            </ul>
        </section>
        <div className="sticky top-0 flex flex-col gap-[3rem] h-[66.6667vh] lg:h-[50vh] w-3/5 justify-center sm:items-center ">
            <aside className=' relative aspect-square w-full lg:w-[22rem] '>
               {ValuesArray.map(feature => (
                <feature.card id={feature.id} key={feature.id} />
               ))}
            </aside>
        </div>
    </div>
    
  </article>
  );
};

export default Foundation;