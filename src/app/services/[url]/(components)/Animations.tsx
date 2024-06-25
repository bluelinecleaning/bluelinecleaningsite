// 'use client'
import React, { useRef } from 'react'
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import Image from 'next/image';

// Assets
import Calendar from '../../../../../assets/services/calendar.png'
import People from '../../../../../assets/services/people.png'
import Availability from '../../../../../assets/services/clock.png'



export default function Animations() {
  // For Lottie animation
    const reliableRef = useRef<LottieRefCurrentProps>(null);
  
    return (
    <div className=' py-[2rem] flex flex-wrap gap-2 md:gap-0 justify-center text-white text-center text-[1.2rem] italic ' >
        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto ">
            <Image 
                src={Calendar}
                className='h-[6rem] w-[6rem] mx-auto'
                title='Calendar icon'
                alt='Calendar icon'
            />
            <h4>Reliability</h4>
        </div>

        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto" >
            <Image 
                src={People}
                className='h-[6rem] w-[6rem] mx-auto'
                title='People icon'
                alt='People icon'
            />
            <h4 className='leading-[1.2rem]'>Integrated Workforce</h4>
        </div>

        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto" >
            <Image 
                src={Availability}
                className='h-[6rem] w-[6rem] mx-auto'
                title='People icon'
                alt='People icon'
            />
            <h4>24/7 Availability</h4>
        </div>

        <div className="w-[10rem] md:w-1/4 flex flex-col gap-2 mx-auto" >
            <svg className="h-[6rem] md:h-[6rem] w-[5rem] text-white mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>

            <h4>Online Reporting</h4>
        </div>

    </div>
  )
}
