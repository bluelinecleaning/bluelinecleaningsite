import React from 'react'
import Timeline from './(components)/Timeline';

export default function Journey() {
    const foundingYear = 1893;
    const currentYear = new Date().getFullYear();
    const age = currentYear - foundingYear;
  
    return (
    <main className='pt-[3rem] md:pt-[5rem] lg:pt-[8rem]'>
        <article className='page  w-full'>
            <h2 className='mainTitle'>PROUD OF OUR JOURNEY</h2>

            {/* Text */}
            <div className="mt-[2rem] md:mt-[3rem] lg:mt-[6rem] 2xl:w-3/4 2xl:mx-auto flex flex-col gap-[1rem] text-black text-justify">
                <p className='narrative'>BlueLine Laundry is a registered Charity with a long and proud history of service to the people of Tasmania. Commencing operations in <strong>1893</strong> as BayView Laundry, the service was developed by the Sisters of the Good Shepherd to provide employment for <strong>disadvantaged women</strong> and girls.</p>
                <p className='narrative'>Since then Blueline Laundry has evolved to a <strong>fully commercial and competitive company</strong> while continuing to offer employment, training and personal development to disabled and disadvantaged people.</p>
                <p className='narrative'> Through <strong>{age} years of service</strong> to the community, our business has survived through two World Wars, the Polio Pandemic, the Spanish Flu, the 1967 Bushfires, the Global Financial Crisis and COVID-19.</p>
            </div>

            <Timeline />
        </article>

    </main>
  )
}
