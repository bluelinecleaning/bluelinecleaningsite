import React from 'react'
import Image from 'next/image'

// Assets
import OpenQuotes from '../../../../assets/open-quote.png'
import CloseQuotes from '../../../../assets/close-quote.png'
import Stars from '../../../../assets/services/stars.png'

export default function Reviews({service}: any) {
  
    return (
    <article>
        <div className="relative page">
            <h2 className='mainTitle text-blueBranding font-bold '>What Our Customers Say</h2>
            <Image 
                src={OpenQuotes}
                className='absolute top-[3rem] w-[3rem] opacity-20 '
                title='Open quotes icon'
                alt='Open quotes icon'
            />
            {/* <Image 
                src={CloseQuotes}
                className='absolute top-[10.5rem] right-[1rem] w-[3rem] opacity-20 '
                title='Close quotes icon'
                alt='Close quotes icon'
            /> */}
            {/* First review */}
            <div className="mt-[2rem] flex flex-col items-center gap-4 ">
                <Image 
                    src={Stars}
                    className='w-[5rem] opacity-80 '
                    title='Five stars icon'
                    alt='Five stars icon'
                />
                <p className='text-justify'>{service?.review1}</p>
                <div className=" flex flex-col w-full items-end ">
                    <p className='font-bold leading-3 '>{service.reviewer1}</p>
                    <p>{service.reviewer1Position}</p>
                </div>
            </div>
            {/* Second review */}
            <div className="mt-[2rem] flex flex-col items-center gap-4 ">
                <Image 
                    src={Stars}
                    className='w-[5rem] opacity-80 '
                    title='Five stars icon'
                    alt='Five stars icon'
                />
                <p className='text-justify'>{service?.review2}</p>
                <div className=" flex flex-col w-full items-end ">
                    <p className='font-bold leading-3 '>{service.reviewer2}</p>
                    <p>{service.reviewer2Position}</p>
                </div>
            </div>
        </div>
    </article>
  )
}
