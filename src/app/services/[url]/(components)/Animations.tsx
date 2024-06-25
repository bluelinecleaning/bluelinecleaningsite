// 'use client'
import React, { useRef } from 'react'
import Lottie, {LottieRefCurrentProps} from "lottie-react";

// Assets
import Availability from '../../../../../assets/services/availability.json'



export default function Animations() {
  // For Lottie animation
    const reliableRef = useRef<LottieRefCurrentProps>(null);
  
    return (
    <div className=' py-[2rem] flex flex-wrap justify-center text-white text-center text-[1.2rem] italic ' >
        <div className="w-1/2 md:w-1/4 flex flex-col gap-2 mx-auto ">
            <svg className="h-[4rem] md:h-[6rem] w-[4rem] text-white mx-auto "  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" />
            </svg>
            <h4>Reliability</h4>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col mx-auto" >
            <svg className="h-[4rem] md:h-[6rem] w-[4rem] text-white mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
            <h4>Integrated Workforce</h4>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col mx-auto" >
            <Lottie 
                className='h-[6rem]'
                onComplete={() => reliableRef.current?.stop}
                loop={true}
                animationData={Availability}
            />
            <h4>24/7 Availability</h4>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col mx-auto" >
            <svg className="h-[4rem] md:h-[6rem] w-[4rem] text-white mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>

            <h4>Online Reporting</h4>
        </div>

    </div>
  )
}
