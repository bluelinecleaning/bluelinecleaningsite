import Head from "next/head";

// Components
import Form from "./(home)/Form";
import Foundation from "./(home)/Foundation";
import Impact from "./(home)/Impact";
import Intro from "./(home)/Intro";
import What from "./(home)/What";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Blueline Cleaning",
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
      }
    ]
  }
  
  return (
    <div className="fira pt-[6rem] lg:pt-0 min-h-screen ">
      <Head>
        <title>Blueline Cleaning</title>
        <meta name="description" content="Registered charity organization that creates meaningful employment opportunities by providing commercial, industrial and production cleaning services in Tasmania." />
        <link rel="canonical" href="https://www.bluelinecleaning.com.au" />
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
      <What />
      <Impact />
      <Foundation />
      <Form />
    </div>
  );
}
