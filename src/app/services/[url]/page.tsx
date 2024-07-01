import React from 'react'
import { Metadata } from 'next';
import Head from 'next/head';

// Assets
import { ServicesArray } from "@/app/(home)/(constants)/services"; 
import ServiceIntro from './ServiceIntro';

// Components
import Animations from './(components)/Animations';
import Reviews from './Reviews';
import Reputation from './Reputation';
import ServiceOptions from './ServiceOptions';



export async function generateMetadata({params}: { params: { url: string } }): Promise<Metadata> {
    const activeService = ServicesArray.find(s => s.url === params.url)

    return {
        title: `${activeService?.title}`,
        description: `${activeService?.description}`,
        alternates: {
            canonical: `https://www.bluelinecleaning.com.au/services/${activeService?.url}`
        },
        openGraph: {
            title: `${activeService?.title}`,
            description: `${activeService?.description}`,
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

export default function page({params}: { params: { url: string } }) {
  
    const activeService = ServicesArray.find(s => s.url === params.url)

    const metadata: any = generateMetadata({ params })

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${activeService?.title}`,
        "url": `https://www.bluelinecleaning.com.au/services/${activeService?.url}`,
        "headline": "Commercial, Industrial and Production Cleaning Services in Tasmania",
        "description": `${activeService?.description}`,
        "logo": {
            "@type": "ImageObject",
            "url": `https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg`
        },
        "sameAs": [
            `https://www.bluelinecleaning.com.au/blog/${activeService?.url}`
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
            "item": `https://www.bluelinecleaning.com.au/services`,
          },
          {
            '@type': 'ListItem',
            "position": 3,
            "name": activeService?.title,
            "item": `https://www.bluelinecleaning.com.au/services/${activeService?.url}`,
            },
        ]
    }
  
    return (
        <div className="fira pt-[8rem] lg:pt-0 min-h-screen ">
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

            <ServiceIntro service={activeService} />
            <section className='bg-[#007FA3] page'>
                <Animations />
            </section>
            <Reviews service={activeService} />
            <Reputation />
            <ServiceOptions service={activeService} />
        </div>
    )
}
