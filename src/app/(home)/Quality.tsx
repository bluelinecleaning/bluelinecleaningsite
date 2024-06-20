import Image from 'next/image'
import React from 'react'

// Assets
import Iso1 from '../../../assets/iso-1.jpg'
import Iso2 from '../../../assets/iso-2.jpg'

export default function Quality() {
  return (
    <section className=' bg-gradient-to-b from-blueBranding to-[#2896FC] border-b border-blueBranding' id='impact'>
        <div className='page flex flex-col gap-[1rem]'>
            <h4 className='font-bold text-white text-[1.875rem] leading-[2rem] text-center '>Quality and Safeguarding</h4>
            <p className='text-white text-[0.875rem]'>At Blueline, we prioritize quality and safety in every aspect of our operations. Adhering to ISO9001 and ISO14001 standards, we ensure our services meet the highest benchmarks for quality and environmental management. We implement rigorous quality control measures and comprehensive safeguarding policies to protect our clients and employees.</p>
        </div>

        <div className="flex gap-2 justify-center pb-[1rem]">
            <Image 
                src={Iso1}
                className='w-[4rem] h-auto'
                title='ISO 14001 certificate'
                alt='ISO 14001 certificate'
            />
            <Image 
                src={Iso2}
                className='w-[4rem] h-auto'
                title='ISO 9001 certificate'
                alt='ISO 9001 certificate'
            />
        </div>
        
    </section>
  )
}
