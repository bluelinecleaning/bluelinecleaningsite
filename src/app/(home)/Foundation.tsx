'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Components
import Features from './(components)/Features';
import { ValuesArray } from './(constants)/Values';

// Assets
import Logo from '../../../assets/new_logo.png'
import Charity from '../../../assets/charity.png'
import SocialTraders from '../../../assets/socialTraders.png'

const Foundation = () => {
 
  return (
  <article className='bg-gray-100 fira py-[2rem]'>
    
    <div className='page'>
        <h3 className='font-bold text-[1.875rem] leading-[2rem] text-center'>WHO WE ARE</h3>
        <div className='pt-[2rem] text-[0.875rem] flex flex-col gap-[0.5rem]'>
            <p className=''>We are a <span className='font-bold'>registered charity and social enterprise</span> organization that has been dedicated to creating meaningful employment opportunities in Tasmania for over 130 years.</p>
            <p>We have a rich history of social impact and excellence in laundry and linen services. Building on this strong foundation, we&apos;ve expanded our offerings to include comprehensive cleaning solutions across various sectors.</p>
            <p>Our aim is to ensure <span className='font-bold'>cleanliness and hygiene standards</span> are met with the highest level of professionalism whilst growing our <span className='font-bold'>social purpose</span>. Our service categories encompass Commercial Cleaning, Industrial Cleaning, Domestic Cleaning, and School Cleaning.</p>
        </div>
    </div>

    <h3 className='mt-[2rem] font-bold text-[1.875rem] leading-[2rem] text-center'>OUR VALUES</h3>
    <div className="px-[1rem] flex  w-full items-center gap-[1rem]">
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
        <div className="sticky top-0 flex flex-col gap-[3rem] h-screen w-3/5 justify-center ">
            <div className="absolute opacity-20 top-[4rem] -ml-[5rem] animate-bounce w-full flex justify-center bg-blueBranding rounded-xl ">
                <Image 
                    src={Logo}
                    className=' w-[7rem] object-cover'
                    title='Section Hero Image'
                    alt='Blueline NDIS worker'
                />
            </div>
            <aside className=' relative aspect-square w-full rounded-2xl bg-gray-300 shadow-md shadow-gray-600'>
               {ValuesArray.map(feature => (
                <feature.card id={feature.id} key={feature.id} />
               ))}
            </aside>
        </div>
    </div>
    <div className='-mt-[6rem] page flex gap-2 justify-center'>
        <Image 
            src={Charity}
            className='w-[6rem] h-[6rem]'
            title='Registered Charity Certificate'
            alt='Registered Charity Certificate'
        />
        <Image 
            src={SocialTraders}
            className='w-[6rem] h-[6rem] object-cover'
            title='Social Traders Certificate'
            alt='Social Traders Certificate'
        />
    </div>
  </article>
  );
};

export default Foundation;