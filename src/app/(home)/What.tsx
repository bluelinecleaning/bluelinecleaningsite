import React from 'react'
import Slider from './(components)/Slider'

export default function What() {
  return (
    <main className='py-[3rem] w-full bg-gradient-to-r from-[#2896FC] to-[#0181AC]'>
        <article className='page fira'>
            <h2 className='font-bold text-white text-[1.875rem] leading-[2rem] text-center'>What We Do?</h2>
            <section className='mt-[2rem]'>
                <Slider />
            </section>
        </article>
    </main>
  )
}
