import Image from 'next/image';
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
  
    console.log(service)
  
    return (
    <article className='page'>
        <div>
            {service.options.map((option: Option) => (
                <section 
                    key={option.id}
                    className='shadow-2xl my-[2rem] '
                >
                    {/* Option title */}
                    <div className="bg-blueBranding text-center text-white p-[1rem] ">
                        <h3 className='text-[1.5rem]'>{option.optionTitle}</h3>
                    </div>
                    <div className='px-[1rem] py-[1rem]'>
                        {/* Price */}
                        <div className="text-blueBranding text-center ">
                            <p>start from</p>
                            <p className=''><span className='font-extrabold text-[2rem]'>${option.optionPrice}</span>/ph</p>
                        </div>
                        {/* Option explanation */}
                        <ul className='mt-[1rem]'>
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
                    </div>
                </section>
            ))}
        </div>
    </article>
  )
}
