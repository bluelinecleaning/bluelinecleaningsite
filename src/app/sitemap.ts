import { MetadataRoute } from "next";

// Constants
import { ServicesArray } from "./(home)/(constants)/services";
import { fullNews } from "./lib/interface";
import { getNews } from "./utils/fetchNews";

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
    const services = ServicesArray

    const servicesEntries: MetadataRoute.Sitemap = services
        .filter(service => !service.url.includes("blueline-laundry"))
        .map((service) => ({
            url: `https://www.bluelinecleaning.com.au/services/${service.url}`,
            priority: 0.7  // Example priority for services pages
        }));

    const news = await getNews();
    
    const newsArticles: MetadataRoute.Sitemap = news.map((article:fullNews) => ({
        url:`https://www.bluelinecleaning.com.au/news/${article.currentSlug}`,
        priority: 0.5
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
        {
            url: 'https://www.bluelinecleaning.com.au/news',
            priority: 0.8
        },
        ...servicesEntries,
        ...newsArticles
    ]
}