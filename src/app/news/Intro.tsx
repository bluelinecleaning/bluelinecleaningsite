'use client'

import React from 'react'
import { simpleNewsCard } from '../lib/interface'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'

export default function Intro({news}:any) {
  
    console.log(news)
  
    return (
    <article className='w-full h-[22.5rem] sm:h-[27.5rem] md:h-[40.5rem] lg:h-[40.5rem]'>
        <section className='bg-gradient-to-b from-[#2896FC] to-[#0181AC] page'>
            <h1 className='py-[2rem] mainTitle text-white text-left'>Our Latest News</h1>
        </section>
        <section className='page my-[2rem] grid grid-cols-2 gap-4'>
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
                    <div className='p-2 flex flex-col gap-2'>
                        <h3 className='text-lg line-clamp-2 font-bold leading-[1.4rem] '>{post.title}</h3>
                        <p className=' line-clamp-3 text-sm'>{post.smallDescription}</p>
                        
                        <button className='w-full font-extralight bg-gradient-to-b from-[#2896FC] to-[#0181AC] text-white rounded'>
                            <Link href={`/news/${post.currentSlug}`}>Read more</Link>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    </article>
  )
}
