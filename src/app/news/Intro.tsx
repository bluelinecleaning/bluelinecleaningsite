'use client'

import React from 'react'
import { simpleNewsCard } from '../lib/interface'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'

export default function Intro({news}:any) {
  
    console.log(news)
  
    return (
    <article className='w-full h-[22.5rem] sm:h-[27.5rem] md:h-[40.5rem] lg:h-[40.5rem]'>
        <section className='bg-gradient-to-b from-[#2896FC] to-[#0181AC] page'>
            <h1 className='py-[2rem] mainTitle text-white text-left'>Our Latest News</h1>
        </section>
        <section className='page grid grid-cols-2 gap-2'>
            {news.map((post:simpleNewsCard, index:number) => (
                <div 
                    key={index}
                    className=' shadow-xl'
                >
                    <Image 
                        className='h-[8rem] object-cover rounded-t-lg'
                        src={urlFor(post.titleImage).url()}
                        alt='image'
                        width={500}
                        height={200}
                    />
                    <div className='p-2'>
                        <h3 className='text-lg line-clamp-2'>{post.title}</h3>
                        <p className=' line-clamp-3 text-sm'>{post.smallDescription}</p>
                    </div>
                </div>
            ))}
        </section>
    </article>
  )
}
