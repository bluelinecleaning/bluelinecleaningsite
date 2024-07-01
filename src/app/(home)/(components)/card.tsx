import classNames from 'classnames';
import React from 'react'
import { useFeatureStore } from './store';
import Image from 'next/image';

// Assets
import Alex from'../../../../assets/alex.png'
import Tsega from '../../../../assets/Tsega.png'
import James from '../../../../assets/james.png'
import Damian from '../../../../assets/damian.png'
import Andrew from '../../../../assets/Andrew.png'


type FeatureCardProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps

type CardProps = {
    id: number | string
}

function FeatureCard({ gradient, children, id }: FeatureCardProps) {
    
    const inViewFeature = useFeatureStore((state) => state.inViewFeature)
  
    return (
    <div className={classNames("absolute inset-0  w-full",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
    )}>
        {children}
    </div>
  )
}

export const Todo = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient=''>
           
            <p className='cardText'>Everybody deserves to be treated equally and with respect</p>
            <div className="flex justify-center ">
                <Image 
                    src={Alex}
                    className='absolute -top-[8rem] sm:-top-[5rem] md:top-0 lg:-top-[5rem] opacity-35 object-cover w-[12.2rem] lg:w-[15rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
        </FeatureCard>
    )
}

export const Colors = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient=''>
            
            <p className='cardText'>Make sure all our customers receive same quality</p>
            <div className="flex justify-center ">
                <Image 
                    src={Tsega}
                    className='absolute -top-[8rem] sm:-top-[4rem] md:top-0 opacity-35 object-cover w-[12.2rem] sm:w-[13rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            
        </FeatureCard>
    )
}

export const Avaialability = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient=''>
            
            <p className='cardText'>Safe Environment, Safe workplace... Everyone gets to go home safe</p>
            <div className="flex justify-center ">
                <Image 
                    src={James}
                    className='absolute -top-[5rem] sm:-top-[3rem] md:top-0 opacity-35 object-cover w-[10rem] lg:w-[11rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            
        </FeatureCard>
    )
}

export const Music = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient=''>
            
            <p className='cardText lg:pt-[5rem]'>Our staff well-being stands as our biggest priority, and supporting them means everything to us</p>
            <div className="flex justify-center ">
                <Image 
                    src={Damian}
                    className='absolute -top-[5rem] sm:bottom-0 md:top-0 lg:-top-[5rem] opacity-35 object-cover w-[8.3rem] lg:w-[10rem] sm:mx-auto lg:mx-0  '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            
        </FeatureCard>
    )
}

export const Safety = ({id} : CardProps) => {
    return (
        <FeatureCard id={id} gradient=''>
          
            <p className='cardText lg:pt-[5rem]  '>Everyone gets an equal opportunity to learn and try new things, and develop their skills</p>
            <div className="flex justify-center ">
                <Image 
                    src={Andrew}
                    className='absolute -top-[5rem] sm:top-0 md:top-4 lg:-top-[3rem] opacity-35 object-cover w-[8rem] lg:w-[9rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
           
        </FeatureCard>
    )
}