import Image from 'next/image'
import React from 'react'

// Assets
import Iso1 from '../../../assets/iso-1.jpg'
import Iso2 from '../../../assets/iso-2.jpg'

export default function Quality() {
  return (
    <section className=' bg-gradient-to-b from-blueBranding to-[#2896FC] border-b border-blueBranding' id='impact'>
        <div className='page 2xl:w-3/4 2xl:mx-auto md:pt-[5rem] lg:pt-[6rem] flex flex-col gap-[1rem] md:gap-[3rem]'>
            <h4 className='mainTitle text-white '>Quality and Safeguarding</h4>
            <p className='text-white narrative'>At Blueline, we prioritize quality and safety in every aspect of our operations. Adhering to ISO9001 and ISO14001 standards, we ensure our services meet the highest benchmarks for quality and environmental management. We implement rigorous quality control measures and comprehensive safeguarding policies to protect our clients and employees.</p>
        </div>

        <div className="md:mt-[2rem] flex gap-2 md:gap-4 justify-center pb-[1rem] md:pb-[3rem]  ">
            <Image 
                src={Iso1}
                className='w-[4rem] md:w-[6rem] h-auto shadow-2xl'
                title='ISO 14001 certificate'
                alt='ISO 14001 certificate'
            />
            <Image 
                src={Iso2}
                className='w-[4rem] md:w-[6rem] h-auto shadow-2xl'
                title='ISO 9001 certificate'
                alt='ISO 9001 certificate'
            />
        </div>
        
    </section>
  )
}
