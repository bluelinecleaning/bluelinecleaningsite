import { MetadataRoute } from "next";

// Constants
import { ServicesArray } from "./(home)/(constants)/services";

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
    const services = ServicesArray

    const servicesEntries: MetadataRoute.Sitemap = services.map((service) => ({
        url: `https://www.bluelinecleaning.com.au/services/${service.url}`
    }))

    return [
        {
            url: 'https://www.bluelinecleaning.com.au',
            priority: 1
        },
        {
            url: 'https://www.bluelinecleaning.com.au/our-history',
            priority: 0.8
        },
        ...services
    ]
}