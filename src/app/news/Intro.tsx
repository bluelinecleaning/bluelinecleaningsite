'use client'

import React from 'react'
import { simpleNewsCard } from '../lib/interface'
import Image from 'next/image'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'

export default function Intro({news}:any) {
  
    console.log(news)
  
    return (
    <article className='w-full'>
        <section className='bg-gradient-to-b from-[#2896FC] to-[#0181AC] page'>
            <h1 className='py-[2rem] mainTitle text-white text-left'>Our Latest News</h1>
        </section>
        <section className='px-[4rem] my-[4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem] xl:gap-0 '>
            {news.map((post:simpleNewsCard, index:number) => (
                <div 
                    key={index}
                    className=' shadow-xl border-t border-blueBranding rounded-t-lg xl:max-w-[20rem] xl:mx-auto 2xl:max-w-[25rem] '
                >
                    <Image 
                        className='h-[12rem] 2xl:h-[15rem] object-cover rounded-t-lg'
                        src={urlFor(post.titleImage).url()}
                        alt='image'
                        width={500}
                        height={200}
                    />
                    <div className='p-2 xl:p-4 xl:pb-8 2xl:px-8 pb-[1rem] flex flex-col gap-2 xl:gap-4'>
                        <h3 className='text-lg line-clamp-2 font-bold leading-[1.4rem] '>{post.title}</h3>
                        <p className=' line-clamp-3 text-sm'>{post.smallDescription}</p>
                        
                        
                            <Link href={`/news/${post.currentSlug}`} className='2xl:flex 2xl:justify-center' >
                                <button className='w-full 2xl:w-2/3 2xl:mx-auto font-extralight bg-gradient-to-b from-[#2896FC] to-[#0181AC] text-white rounded'>
                                    Read more
                                </button>
                            </Link>
                    </div>
                </div>
            ))}
        </section>
    </article>
  )
}
