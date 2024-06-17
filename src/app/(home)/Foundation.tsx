'use client'

import React, { useEffect, useRef, useState } from 'react';

// Assets
import { ServicesArray } from './(constants)/services'

const Foundation = () => {
 

  return (
  <article className='h-screen'>
    <div className="flex w-full items-start gap-20">
        <div className="w-full">
            <ul>
                {ServicesArray.map((service) => (
                    <li key={service.id}>
                        <p className='py-16'>{service.title}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center ">
            <div className=' aspect-square w-full bg-gray-100'>
                col
            </div>
        </div>
    </div>
  </article>
  );
};

export default Foundation;