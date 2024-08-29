import { client } from "../lib/sanity"

export async function getNews() {
    const query = `
        *[_type == 'news'] | order(_createdAt desc) {
        title,
            smallDescription,
            "currentSlug": slug.current,
            titleImage
        }
    `
    const data = await client.fetch(query)

    return data
}