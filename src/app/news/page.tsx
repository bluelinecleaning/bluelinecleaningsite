import React from 'react'
import { client } from '../lib/sanity'
import { simpleNewsCard } from '../lib/interface'
import Intro from './Intro'

export const revalidate = 30 // Revalidate at most 30 seconds

async function getData() {
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

export default async function page() {
  
    const data: simpleNewsCard[] = await getData()

    return (
    <div className='fira pt-[4.5rem] min-h-screen '>
        <Intro news={data} />
    </div>
  )
}
