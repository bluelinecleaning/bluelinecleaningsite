import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

// Components
import Intro from './Intro'
import Journey from './Journey'

export async function generateMetadata():Promise<Metadata> {
  return {
    title: 'Our history',
    description: "Historical recopilation of Blueline. 131 years impacting Tasmanian lives.",
    alternates: {
      canonical: 'https://www.bluelinecleaning.com.au/our-history'
    },
    openGraph: {
      title: 'Our history',
      description: "Historical recopilation of Blueline. 131 years impacting Tasmanian lives.",
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

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Our History",
    "url": "https://www.bluelinecleaning.com.au",
    "description": "Registered charity organization that creates meaningful employment opportunities by providing commercial, industrial and production cleaning services in Tasmania.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png"
    },
    "sameAs": [
      "https://www.bluelinecleaning.com.au" // Add the canonical URL here
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
        "item": `https://www.bluelinecleaning.com.au/our-history`,
      }
    ]
  }

  return (
    <div className='fira pt-[8rem] lg:pt-0 min-h-screen'>
      <Head>
        <title>Our History</title>
        <meta name="description" content="Historical recopilation of Blueline Laundry. 131 years impacting Tasmanian lives." />
        <link rel="canonical" href="https://www.bluelinecleaning.com.au/our-history" />
      </Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbData)}}
      />

        <Intro />
        <Journey />
    </div>
  )
}
