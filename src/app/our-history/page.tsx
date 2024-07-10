import React from 'react'
import Intro from './Intro'
import Journey from './Journey'

export default function page() {
  return (
    <div className='fira pt-[8rem] lg:pt-0 min-h-screen'>
        <Intro />
        <Journey />
    </div>
  )
}
