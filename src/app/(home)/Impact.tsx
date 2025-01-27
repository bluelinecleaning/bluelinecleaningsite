import React from 'react'
import Image from 'next/image'

// Assets
import Team from '../../../assets/cleaning-team.png'
import BiggerTeam from '../../../assets/cleaning-team-bigger.png'

export default function Impact() {
  return (
    <section className=' bg-gradient-to-b from-[#0181AC] to-blueBranding  border-b border-blueBranding' id='impact'>
      <div className='page 2xl:w-3/4 2xl:mx-auto flex flex-col gap-[1rem] md:gap-[3rem] lg:gap-[6rem]'>
        <h3 className='mainTitle text-white'>Maximum Impact!</h3>
        <div className="flex flex-col gap-2 text-white narrative text-justify">
          <p className=''>Quality and safety are central to every aspect of our operations. At Blueline, we ensure  our services meet the highest benchmarks for quality and environmental management. We maintain rigorous quality control measures and comprehensive safeguarding policies to protect both our customers and employees.</p>
          <p>We are 100% committed to inclusive employment, providing work opportunities to people of all abilities and backgrounds without ever compromising on quality or standards. Our dedication to excellence is reflected in our Standard Operating Procedures (SOPs), safety protocols, and support networks, all designed to deliver the highest standards while maintaining commercial competitiveness.</p>
          <p>By choosing our cleaning or laundry services, you partner with us in supporting some of the most vulnerable in our community. Together, we create meaningful job opportunities and enable an inclusive workforce.</p>
        </div>
      </div>
      {/* <div className="flex items-end justify-between sm:mt-[2rem] md:mt-[3rem] lg:mt-[6rem]  ">
        <Image 
          src={Team}
          className='lg:hidden w-full h-full object-cover'
          title='Blueline Cleaning Team'
          alt='Blueline Cleaning Team'
        />
        <Image 
          src={BiggerTeam}
          quality={100}
          className='hidden lg:block w-full h-[30rem] object-cover object-top'
          title='Blueline Cleaning Team'
          alt='Blueline Cleaning Team'
        />
      </div> */}
      
    </section>
  )
}
