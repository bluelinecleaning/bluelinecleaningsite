'use client'
import React, { useRef } from 'react'
import Lottie, {LottieRefCurrentProps} from "lottie-react";

// Animations
import Reliable from '../../../../../assets/services/reliable.json'
import Workfroce from '../../../../../assets/services/workforce.json'
import Availability from '../../../../../assets/services/availability.json'
import Reporting from '../../../../../assets/services/reporting.json'


export default function Animations() {
  // For Lottie animation
    const reliableRef = useRef<LottieRefCurrentProps>(null);
  
    return (
    <div className=' py-[2rem] flex flex-wrap justify-center text-white text-center text-[1.2rem]' >
        <div className="w-1/2 flex flex-col gap-2 mx-auto ">
            <Lottie 
                className='h-[6rem]'
                onComplete={() => reliableRef.current?.stop}
                loop={true}
                animationData={Reliable}
            />
            <h4>Reliability</h4>
        </div>

        <div className="w-1/2 flex flex-col mx-auto" >
            <Lottie 
                className='h-[6rem]'
                onComplete={() => reliableRef.current?.stop}
                loop={true}
                animationData={Workfroce}
            />
            <h4>Integrated Workforce</h4>
        </div>

        <div className="w-1/2 flex flex-col mx-auto" >
            <Lottie 
                className='h-[6rem]'
                onComplete={() => reliableRef.current?.stop}
                loop={true}
                animationData={Availability}
            />
            <h4>24/7 Availability</h4>
        </div>

        <div className="w-1/2 flex flex-col mx-auto" >
            <Lottie 
                className='h-[6rem]'
                onComplete={() => reliableRef.current?.stop}
                loop={false}
                animationData={Reporting}
            />
            <h4>Online Reporting</h4>
        </div>

    </div>
  )
}
