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
import Ndis from '../../../../assets/ndis.svg'
import Integrity from '../../../../assets/integrity.png'
import Iso from '../../../../assets/high-quality.png'
import Safe from '../../../../assets/safe.png'
import People from '../../../../assets/people.png'
import Care from '../../../../assets/care.png'
import Logo from '../../../../assets/new_logo.png'


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
    <div className={classNames("absolute inset-0 h-full w-full py-2 rounded-2xl bg-gradient-to-br transition-opacity",
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
            <div className='cardLogos'>
                <Image 
                    src={Integrity}
                    className=''
                    title='Integrity icon'
                    alt='Two hands shaking icon'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='cardText'>Everybody deserves to be treated equally and with respect</p>
            <div className="flex justify-center sm:justify-end ">
                <Image 
                    src={Alex}
                    className='absolute bottom-2 sm:bottom-0 opacity-15 object-cover w-[4.2rem] lg:w-[7rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            <Image 
                src={Logo}
                className='cardLogo '
                title='Blueline logo'
                alt='Blueline logo'
            />
            
        </FeatureCard>
    )
}

export const Colors = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-orange-300 to-white'>
            <div className='cardLogos'>
                <Image 
                    src={Iso}
                    className='rounded-full'
                    title='Quality icon'
                    alt='Quality icon'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='cardText'>Make sure all our customers receive same quality</p>
            <div className="flex justify-center sm:justify-end lg:justify-start ">
                <Image 
                    src={Tsega}
                    className='absolute bottom-2 sm:bottom-0 opacity-15 object-cover w-[4.2rem] lg:w-[8rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            <Image 
                src={Logo}
                className='cardLogo '
                title='Blueline logo'
                alt='Blueline logo'
            />
        </FeatureCard>
    )
}

export const Avaialability = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-green-300 to-white'>
            <div className='cardLogos'>
                <Image 
                    src={Safe}
                    className=''
                    title='Shield icon'
                    alt='Shield icon'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='cardText'>Safe Environment, Safe workplace... Everyone gets to go home safe</p>
            <div className="flex justify-center sm:justify-end ">
                <Image 
                    src={James}
                    className='absolute bottom-2 sm:top-0 sm:left-1/2 lg:left-0 opacity-15 object-cover w-[3.8rem] lg:w-[6rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            <Image 
                src={Logo}
                className='cardLogo '
                title='Blueline logo'
                alt='Blueline logo'
            />
        </FeatureCard>
    )
}

export const Music = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-yellow-300 to-white'>
            <div className='cardLogos'>
                <Image 
                    src={People}
                    className=''
                    title='People icon'
                    alt='An icon represening 3 people or a community'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='cardText lg:pt-[5rem]'>Our staff well-being stands as our biggest priority, and supporting them means everything to us</p>
            <div className="flex justify-center ">
                <Image 
                    src={Damian}
                    className='absolute bottom-2 sm:bottom-0 lg:top-0 sm:left-1/2 lg:left-[15rem] opacity-15 object-cover w-[3.3rem] lg:w-[5rem] sm:mx-auto lg:mx-0  '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            <Image 
                src={Logo}
                className='cardLogo '
                title='Blueline logo'
                alt='Blueline logo'
            />
        </FeatureCard>
    )
}

export const Safety = ({id} : CardProps) => {
    return (
        <FeatureCard id={id} gradient='from-red-300 to-white'>
           <div className='cardLogos'>
                <Image 
                    src={Care}
                    className=''
                    title='Care icon'
                    alt='Care icon'
                />
                
                <Image 
                    src={Ndis}
                    className=''
                    title='Ndis logo'
                    alt='Ndis'
                />

            </div>
            <p className='cardText lg:pt-[5rem]'>Everyone gets an equal opportunity to learn and try new things, and develop their skills</p>
            <div className="flex justify-center ">
                <Image 
                    src={Andrew}
                    className='absolute bottom-2 sm:bottom-0 lg:bottom-2 sm:right-0 opacity-15 object-cover w-[3.1rem] lg:w-[5rem] sm:mx-auto '
                    title='NDIS participant working'
                    alt="Photo of an NDIS participant Blueline's worker"
                />
            </div>
            <Image 
                src={Logo}
                className='cardLogo '
                title='Blueline logo'
                alt='Blueline logo'
            />
        </FeatureCard>
    )
}