import { fullNews } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity'
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const revalidate = 30 // Revalidate at most 30 seconds

async function getData(slug:string) {
    const query = `
        *[_type == 'news' && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            smallDescription,
            content,
            titleImage
        }[0]
    `   

    const data = await client.fetch(query)
    return data;

}

export async function generateMetadata({params}: { params: { url: string } }): Promise<Metadata> {
    const data: fullNews = await getData(params.url)

    return {
        title: `${data?.title}`,
        description: `${data?.smallDescription}`,
        alternates: {
            canonical: `https://www.bluelinecleaning.com.au/data/${data?.currentSlug}`
        },
        openGraph: {
            title: `${data?.title}`,
            description: `${data?.smallDescription}`,
            url: `https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg`,
            type: 'website',
            images: [
                {
                    url: `https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg`
                }
            ]
        },
        robots: {
            index: true,
            follow: true
        }
    }
    
}

export default async function NewsArticle({params}: {params: {url: string}}) {
  
    const data: fullNews = await getData(params.url)

    const metadata: any = generateMetadata({ params })

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${data?.title}`,
        "url": `https://www.bluelinecleaning.com.au/services/${data?.currentSlug}`,
        "headline": "Commercial, Industrial and Production Cleaning Services in Tasmania",
        "description": `${data?.smallDescription}`,
        "logo": {
            "@type": "ImageObject",
            "url": `https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png`
        },
        "sameAs": [
            `https://www.bluelinecleaning.com.au/news/${data?.currentSlug}`
        ]
    }

    const breadCrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://www.bluelinecleaning.com.au`
          },
          {
            '@type': 'ListItem',
            "position": 2,
            "name": "Services",
            "item": `https://www.bluelinecleaning.com.au/news`,
          },
          {
            '@type': 'ListItem',
            "position": 3,
            "name": data?.title,
            "item": `https://www.bluelinecleaning.com.au/news/${data?.currentSlug}`,
            },
        ]
    }

    return (
    <div className='pt-[5rem] lg:pt-0 '>
        
        <Head>
            <title>{metadata.title} </title>
            <meta name="description" content={metadata.description} />
            {/* <link rel="canonical" href={metadata.alternates.canonical} /> */}
        </Head>
        <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
        />
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbData)}}
        />
        
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
