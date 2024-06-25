'use client'

import React, { useRef } from 'react'

// Assets
import { ServicesArray } from "@/app/(home)/(constants)/services"; 
import ServiceIntro from './ServiceIntro';

// Components
import Animations from './(components)/Animations';
import Reviews from './Reviews';
import Reputation from './Reputation';
import ServiceOptions from './ServiceOptions';

export default function page({params}: { params: { url: string } }) {
  
    const activeService = ServicesArray.find(s => s.url === params.url)

  
    return (
    <div className="fira pt-[8rem] lg:pt-0 min-h-screen ">
        <ServiceIntro service={activeService} />
        <section className='bg-[#007FA3] page'>
            <Animations />
        </section>
        <Reviews service={activeService} />
        <Reputation />
        <ServiceOptions service={activeService} />
    </div>
  )
}
