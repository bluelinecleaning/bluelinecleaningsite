'use client'

import React from 'react'

export default function Form() {
  return (
    <section className='page bg-gray-100'>
        <form 
          className='relative page border shadow ' 
          onSubmit={() => console.log('submited')}
        >
          <h3 className='font-bold text-center text-blueBranding text-[1.3rem] '>Get a quote</h3>
        </form>
    </section>
  )
}
