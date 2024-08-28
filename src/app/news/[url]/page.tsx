import { fullNews } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity'
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
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

    return (
    <div className='pt-[5rem] lg:pt-0 '>
        <section className="page">
            <h1>
                <Link href={'/news'}>
                    <span className='block text-base text-blueBranding font-bold tracking-wide'>
                        Blueline - Latest News
                    </span>
                </Link>
                <span className='mt-2 lg:mt-4 block mainTitle lg:w-2/3 lg:mx-auto '>
                    {data.title}
                </span>
            </h1>

            <div className='lg:mt-[2rem] '>
                <Image 
                    src={urlFor(data.titleImage).url()}
                    className='mt-[1rem] w-full lg:w-[30rem] h-auto sm:h-[20rem] lg:h-[28rem] object-cover lg:mx-auto ' 
                    width={800}
                    height={800}
                    alt='Title image'
                    priority
                />

                <div className='mt-[1rem] lg:mt-[2rem] prose prose-md prose-li:marker:text-blueBranding prose-a:text-blueBranding lg:w-2/3 lg:text-justify lg:mx-auto '>
                    <PortableText value={data.content} />
                </div>

            </div>

        </section>
    </div>
  )
}
