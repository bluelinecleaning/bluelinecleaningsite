'use client'

import React, { useRef } from 'react'
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import Image from 'next/image';

// Assets
import Calendar from '../../../../../assets/services/calendar.png'
import People from '../../../../../assets/services/people.png'
import Availability from '../../../../../assets/services/clock.png'
import Monitor from '../../../../../assets/services/monitor.png'



export default function Animations() {
  // For Lottie animation
    const reliableRef = useRef<LottieRefCurrentProps>(null);
  
    return (
    <div className=' py-[2rem] flex flex-wrap gap-2 md:gap-0 justify-center text-white text-center text-[1.2rem] italic ' >
        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto ">
            <Image 
                src={Calendar}
                className='h-[4rem] w-[4rem] mx-auto'
                title='Calendar icon'
                alt='Calendar icon'
            />
            <h4>Reliability</h4>
        </div>

        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto" >
            <Image 
                src={People}
                className='h-[4rem] w-[4rem] mx-auto'
                title='People icon'
                alt='People icon'
            />
            <h4 className='leading-[1.2rem]'>Integrated Workforce</h4>
        </div>

        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto" >
            <Image 
                src={Availability}
                className='h-[4rem] w-[4rem] mx-auto'
                title='People icon'
                alt='People icon'
            />
            <h4>24/7 Availability</h4>
        </div>

        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto" >
            <Image 
                src={Monitor}
                className='h-[4rem] w-[4rem] mx-auto'
                title='Monitor icon'
                alt='Monitor icon'
            />

            <h4>Online Reporting</h4>
        </div>

    </div>
  )
}
