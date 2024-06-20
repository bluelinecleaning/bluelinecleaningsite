import classNames from 'classnames';
import React from 'react'
import { useFeatureStore } from './store';
import Image from 'next/image';

// Assets
import Damian from'../../../../assets/alex.png'
import Tsega from '../../../../assets/Tsega.png'
import Andrew from '../../../../assets/Glenda.png'
import Ndis from '../../../../assets/ndis.svg'
import Charity from '../../../../assets/charity.png'
import Iso from '../../../../assets/high-quality.png'

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
    <div className={classNames("absolute inset-0 h-full w-full py-2 rounded-2xl bg-gradient-to-br  transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
    )}>
        {children}
        {/* <button className='bg-black text-white rounded-xl absolute bottom-2 right-2 text-xs px-2 py-1 shadow-lg '>Show me</button> */}
    </div>
  )
}

export const Todo = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-blue-300 to-white'>
            <div className='absolute left-[5%] w-[20%] h-full flex flex-col justify-center gap-2'>
                <Image 
                    src={Charity}
                    className=''
                    title='Damian'
                    alt='Damian'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='z-10 pl-[3.5rem] pr-[0.5rem] h-full flex items-center text-[0.875rem] leading-4 text-gray-800'>"Everybody deserves to be treated equally and with respect"</p>
            <div className="flex justify-center ">
                <Image 
                    src={Damian}
                    className='absolute bottom-2 opacity-15 object-cover w-[4.2rem] '
                    title='Damian'
                    alt='Damian'
                />

            </div>
            
        </FeatureCard>
    )
}

export const Colors = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-orange-300 to-white'>
            <div className='absolute left-[5%] w-[20%] h-full flex flex-col justify-center gap-2'>
                <Image 
                    src={Iso}
                    className=' rounded-full'
                    title='Damian'
                    alt='Damian'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='z-10 pl-[3.5rem] pr-[0.5rem] h-full flex items-center text-[0.875rem] leading-4 text-gray-800'>"Make sure all our customers receive same quality"</p>
            <div className="flex justify-center ">
                <Image 
                    src={Tsega}
                    className='absolute bottom-2 opacity-15 object-cover w-[4.2rem] '
                    title='Damian'
                    alt='Damian'
                />

            </div>
        </FeatureCard>
    )
}

export const Avaialability = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-green-300 to-white'>
            <span />
        </FeatureCard>
    )
}

export const Music = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-yellow-300 to-white'>
            <span />
        </FeatureCard>
    )
}

export const Safety = ({id} : CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-red-300 to-white'>
            <span />
        </FeatureCard>
    )
}