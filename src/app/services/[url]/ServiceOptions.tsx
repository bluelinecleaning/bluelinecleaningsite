import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

// Assets


interface Option {
    id: number;
    optionTitle: string;
    optionPrice: number;
    optionContent: OptionContent[];
}

interface OptionContent {
    descriptionId: number;
    descriptionText: string;
}


export default function ServiceOptions( {service}: any ) {
    
    return (
    <article className='px-[1rem] py-[1rem] md:py-[5rem]'>
        <div className='md:flex md:flex-wrap md:gap-4 lg:gap-0 md:justify-center '>
            {service.options.map((option: Option) => (
                <section 
                    key={option.id}
                    className=' shadow-2xl my-[1rem] md:w-[22rem] lg:w-[20rem] md:mx-[1rem] 2xl:mx-[4rem] '
                >
                    {/* Option title */}
                    <div className="bg-blueBranding md:min-h-[8rem] md:flex md:items-center md:justify-center text-center text-white p-[1rem] ">
                        <h3 className='text-[1.5rem] md:text-[2rem] '>{option.optionTitle}</h3>
                    </div>
                    <div className='px-[1rem] py-[1rem] lg:relative '>
                        {/* Price */}
                        <div className="text-blueBranding text-center ">
                            <p>start from</p>
                            <p className=''><span className='font-extrabold text-[2rem]'>${option.optionPrice}</span>/ph</p>
                        </div>
                        {/* Option explanation */}
                        <ul className='mt-[1rem] md:h-[18.44rem]'>
                            {option.optionContent.map((description) => (
                                <li 
                                    key={description.descriptionId}
                                    className='flex gap-2 py-[0.5rem]'
                                >
                                    <svg className="h-[2rem] w-[2rem] text-blueBranding "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <p className='w-[17rem] text-[0.875rem] '>{description.descriptionText}</p>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link 
                            href={'/#contact'}
                            className='mt-[1rem] md:mt-[2rem] lg:mt-[3rem] flex justify-center text-center bg-blueBranding text-white py-2 px-4 rounded mx-auto shadow-lg '
                        >
                            Book an Appointment
                        </Link>
                        <div className="mt-[2rem] mb-[1rem] border border-blueBranding mx-auto w-[5rem] "></div>
                    </div>
                </section>
            ))}
        </div>
    </article>
  )
}
