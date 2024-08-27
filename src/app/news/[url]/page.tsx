import { fullNews } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity'
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

export const revalidate = 30 // Revalidate at most 30 seconds

async function getData(slug:string) {
    const query = `
        *[_type == 'news' && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]
    `   

    const data = await client.fetch(query)
    return data;

}

export default async function NewsArticle({params}: {params: {url: string}}) {
  
    const data: fullNews = await getData(params.url)
    console.log(data)
    return (
    <div className='pt-[5rem] min-h-screen'>
        <section className="page">
            <h1>
                <span className='block text-base text-blueBranding font-bold tracking-wide'>
                    Blueline - Latest News
                </span>
                <span className='mt-2 block mainTitle'>
                    {data.title}
                </span>
            </h1>

            <Image 
                src={urlFor(data.titleImage).url()}
                className='mt-[1rem] w-full h-auto object-cover ' 
                width={800}
                height={800}
                alt='Title image'
                priority
            />

            <div className='mt-[1rem] prose prose-lg prose-headings:underline prose-li:marker:text-blueBranding prose-a:text-blueBranding '>
                <PortableText value={data.content} />
            </div>

        </section>
    </div>
  )
}
