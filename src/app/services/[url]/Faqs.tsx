import React from 'react'


export default function Faqs( {service}: any ) {
  return (
    <article className='pb-[2rem]'>
        <div className='page'>
            <h3 className='mainTitle text-blueBranding'>FAQs</h3>
            <div className='mt-[2rem]'>
                {
                    service.faqs.map((question:any) => (
                        <div key={question.id} className='mt-[1rem]'>
                            <h4 className='font-bold md:text-[1.3rem] text-blueBranding'>{question.question}</h4>
                            <p className='text-justify md:text-[1.125rem]'>{question.answer}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </article>
  )
}
