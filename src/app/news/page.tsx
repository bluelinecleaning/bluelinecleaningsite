import React from 'react'
import { client } from '../lib/sanity'
import { simpleNewsCard } from '../lib/interface'
import Intro from './Intro'
import { getNews } from '../utils/fetchNews'
import { Metadata } from 'next'
import Head from 'next/head'

export const revalidate = 0 // Revalidate at most 30 seconds

async function getData() {
    const data = await getNews()

    return data
}

export async function generateMetadata():Promise<Metadata> {
    return {
      title: 'News',
      description: "Latest news of Blueline. Keep updated with our equal employment programs for people with disabilities.",
      alternates: {
        canonical: 'https://www.bluelinecleaning.com.au/news'
      },
      openGraph: {
        title: 'News',
        description: "Latest news of Blueline. Keep updated with our equal employment programs for people with disabilities.",
        url: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png',
        type: 'website',
        images: [
          {
            url: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png'
          }
        ]
      },
      robots: {
        index: true,
        follow: true
      }
    }
}

export default async function page() {
  
    const data: simpleNewsCard[] = await getData()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "News",
        "url": "https://www.bluelinecleaning.com.au/news",
        "description": "Registered charity organization that creates meaningful employment opportunities by providing commercial, industrial and production cleaning services in Tasmania.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png"
        },
        "sameAs": [
          "https://www.bluelinecleaning.com.au/news" // Add the canonical URL here
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
        "name": "Our History",
        "item": `https://www.bluelinecleaning.com.au/news`,
        }
    ]
    }

    return (
        <div className='fira pt-[4.5rem] lg:pt-0 '>
            <Head>
                <title>News</title>
                <meta name="description" content="Latest news of Blueline. Keep updated with our equal employment programs in Tasmania for people with disabilities." />
                <link rel="canonical" href="https://www.bluelinecleaning.com.au/news" />
            </Head>
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbData)}}
            />
            <Intro news={data} />
        </div>
  )
}
