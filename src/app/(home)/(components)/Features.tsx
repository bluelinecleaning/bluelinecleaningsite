'use client'

import classNames from 'classnames';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { useFeatureStore } from './store';

type Props = {
    children: React.ReactNode;
    id: number;
}

export default function Features({ children, id }: Props) {
  
    const ref = useRef<HTMLParagraphElement>(null)

    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
    const inViewFeature = useFeatureStore(state => state.inViewFeature)

    useEffect(() => {
        // setinviewelement
        if(isInView) setInViewFeature(id)
        if (!isInView && inViewFeature === id) setInViewFeature(null)
    }, [isInView, id, setInViewFeature, inViewFeature])

    // console.log(isInView, children)
  
    return (
    <div ref={ref} className={classNames(
        "py-[5rem] text-gray-300 transition-colors",
        isInView ? "text-black" : "text-gray-300"
    )}>{children}</div>
  )
}
