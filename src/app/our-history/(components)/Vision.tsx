'use client'

import { motion, useTransform , useScroll} from 'framer-motion';
import React, { useRef } from 'react'

import styles from './page.module.scss'

const paragraph = "Our goal for the next 5 years is centred around our purpose - to be the most effective disability services enterprise, changing more people’s lives for the better. "

export default function Vision() {
  
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    const words = paragraph.split(" ")

    return (
        <motion.div 
            className={`page`}       
            ref={element} 
        >
            <h3 className='mainTitle text-blueBranding '>Vision for the future</h3>
            <p className={` mt-[2rem] lg:mt-[4rem] text-[1rem] md:text-[1.3rem] ${styles.paragraph} gap-[0.2rem] lg:w-2/3 lg:mx-auto`}>
                {words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} range={[start, end]} progress={scrollYProgress} >{word}</Word>
                })}
            </p>
            <div className=""></div>
        </motion.div>
    )
}

const Word = ({children, range, progress}:any) => {
    const characters = children.split("")
    const amount = range[1] - range[0]
    const step = amount / children.length
    
    return (
        <span className={styles.word}>
           {
                characters.map((character:any, i:number) => {
                    const start = range[0] + (step * i)
                    const end = range[0] + (step* (i + 1))
                    return <Character key={i} range={[start, end]} progress={progress} >{character}</Character>
                })
           }

        </span>
    )
}

const Character = ({children, range, progress}:any) => {
    const opacity = useTransform(progress, range, [0, 1])
    return(
        <span>
            <span className={styles.shadow}>{children}</span>
            <motion.span style={{opacity}}>
                {children}
            </motion.span>

        </span>
    )
}