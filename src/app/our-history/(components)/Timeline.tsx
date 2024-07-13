'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image';

// Assets
import { datesArray } from '../(constants)/dates'

export default function Timeline() {
    // Ref for parent div
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { margin: '0px 0px -50% 0px' });

    // Refs for timeline dates
    const refs = useRef([]);
    refs.current = datesArray.map((_, i) => refs.current[i] ?? React.createRef());

    const inViews = refs.current.map(ref => useInView(ref, { margin: '0px 0px -30% 0px' }));

    return (
        <section className='pt-[3rem] md:pt-[5rem] lg:pt-[8rem]'>
            <motion.div
                ref={sectionRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 4 }}
            >
                <div
                    className='py-[3rem]'
                    style={{
                        background: isSectionInView ? "#007FA3" : "white",
                        transition: "2s background"
                    }}
                >
                    <h3
                        className='mainTitle'
                        style={{
                            color: isSectionInView ? "white" : "black",
                            transition: "2s color"
                        }}
                    >
                        OUR TIMELINE
                    </h3>
                    <div className=' mx-auto'>
                        {datesArray.map((date, index) => (
                            <motion.div
                                key={index}
                                className='mt-[3rem]'
                                ref={refs.current[index]}
                                
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 5 }}
                            >
                                <div
                                    style={{
                                    
                                        background: inViews[index] ? date.color : "transparent",
                                        transition: "2s background"
                                    }}
                                    className={`page xl:w-2/3 text-${date.textColor} flex flex-col gap-[1rem] `}
                                >
                                    <h4 className='font-bold text-[2rem] ' >{date.year}</h4>
                                    <Image 
                                        style={{background: date.imageBg}}
                                        src={date.image}
                                        className={` h-[13rem] w-[13rem] object-cover mx-auto p-2 shadow-xl `}
                                        title={date.imagetitle}
                                        alt={date.imageAlt}
                                    />
                                    <p className={`narrative text-justify `}>{date.text}</p>
                                    {date.secondEventImage && (
                                        <div className="flex flex-col gap-[1rem]">
                                            <Image 
                                                src={date.secondEventImage}
                                                className={` h-[13rem] w-[13rem] object-cover mx-auto bg-${date.imageBg} p-2 shadow-xl `}
                                                title={date.secondImagetitle}
                                                alt={date.secondImageAlt}
                                            />
                                             <p className={`narrative text-justify `}>{date.secondEventText}</p>
                                        </div>
                                        
                                    )}
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </motion.div>

            <motion.aside
                // ref={}
                className='page'
            >
                <h3 className='mainTitle'>Vision for the Future</h3>
            </motion.aside>
        {/* #0181AC */}
        </section>
    );
}
