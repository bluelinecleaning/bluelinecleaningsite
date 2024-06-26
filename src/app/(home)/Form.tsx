'use client'

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Image from 'next/image'

// Assets
import Logo from '../../../assets/blue-logo.png'

export default function Form() {
  
  // Functions
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      service: "",
      description: "",
      terms: ""
    }, 
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Name is required"),
      lastname: Yup.string()
        .max(20, "Lastname must be 20 characters or less")
        .required("Lastname is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      description: Yup.string()
        .min(20, "Please leave us a more detailed description about your premises")
        .required('A premises description is required'),
      terms: Yup.array().required("Terms of service must be checked")
    }),
    onSubmit: async(values) => {
      console.log('Form sent with: ', values)
    }
  })

  return (
    <section className='px-[1rem] py-[3rem] sm:mx-auto sm:px-[2rem] md:px-[4rem] lg:px-[8rem] bg-blueBranding' id='contact' >
        <form 
          className='relative page lg:px-[4rem] border shadow-xl bg-gradient-to-tl from-gray-200 to-white lg:flex lg:gap-4 ' 
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col">
            <Image 
              src={Logo} 
              className='h-[8rem] lg:h-[12rem] w-auto mx-auto lg:my-auto '
              title='Blueline Logo'
              alt='Blueline Logo'
            />

          </div>
          <div className="page lg:px-[2rem] flex flex-col gap-[1rem]">
          <h3 className='font-bold text-center text-blueBranding text-[1.5rem] '>Get a quote</h3>
            {/* Firstname */}
            <label htmlFor="firstname" className='mt-[1rem] flex flex-col gap-[0.5rem]'>
              <span className={`${formik.touched.firstname && formik.errors.firstname ? 'text-red-400' : 'text-blueBranding'}`}>
                {formik.touched.firstname && formik.errors.firstname 
                  ? formik.errors.firstname 
                  : 'First name'
                }
              </span>
              <input 
                  required 
                  type="text" 
                  name='firstname' 
                  value={formik.values.firstname} 
                  onChange={formik.handleChange} 
                  placeholder='Enter your name' 
                  onBlur={formik.handleBlur}
                  className='form-input '
              />
            </label>

            {/* Last */}
            <label htmlFor="lastname" className='flex flex-col gap-[0.5rem]'>
              <span className={`${formik.touched.lastname && formik.errors.lastname ? 'text-red-400' : 'text-blueBranding'}`}>
                {formik.touched.lastname && formik.errors.lastname 
                  ? formik.errors.lastname 
                  : 'Last name'
                }
              </span>
              <input 
                  required 
                  type="text" 
                  name='lastname' 
                  value={formik.values.lastname} 
                  onChange={formik.handleChange} 
                  placeholder='Enter your last name' 
                  onBlur={formik.handleBlur}
                  className='form-input '
              />
            </label>

            {/* Email */}
            <label htmlFor="email" className='flex flex-col gap-[0.5rem]'>
              <span className={`${formik.touched.email && formik.errors.email ? 'text-red-400' : 'text-blueBranding'}`}>
                {formik.touched.email && formik.errors.email 
                  ? formik.errors.email 
                  : 'Email'
                }
              </span>
              <input 
                required 
                type='email' 
                name='email' 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                placeholder='Enter your email address' 
                onBlur={formik.handleBlur}
                className='form-input'
              />
            </label>

            {/* Service */}
            <label htmlFor="service" className='flex flex-col gap-[0.5rem]'>
                <span className='text-blueBranding'>Service type</span>
                  <div className=''>
                    <select name="service" value={formik.values.service} onChange={formik.handleChange} className=' rounded w-full px-0 text-black'>
                      <option className='w-[8rem]' >Commercial cleaning</option>
                      <option className='w-[8rem]'> Industrial cleaning</option>
                      <option className='w-[8rem]'>Factory cleaning</option>
                      <option className='w-[8rem]'>Domestic cleaning</option>
                      <option className='w-[8rem]'>School cleaning</option>
                    </select>
                  </div>
            </label>

            {/* Description */}
            <label htmlFor="description" className='flex flex-col gap-[0.5rem]'>
              <span className={`${formik.touched.description && formik.errors.description ? 'text-red-400' : 'text-blueBranding'}`}>
                  {formik.touched.description && formik.errors.description 
                    ? formik.errors.description 
                    : 'Project description'
                  }
              </span>
              <textarea 
                required   
                name='description' 
                value={formik.values.description} 
                onChange={formik.handleChange} 
                placeholder='Please let us know your ideas for your project and how we can help you' 
                onBlur={formik.handleBlur}
                className='min-h-[12rem] p-2 bg-white border border-gray-300 '
              />
            </label>

            {/* Terms */}
            <label htmlFor="terms">
              <span className='text-black'>Terms of service</span>
              <div className='flex gap-[1rem] items-center  '>
                <input 
                    required
                    type='checkbox' 
                    name='terms' 
                    onChange={formik.handleChange} 
                    className='' 
                />
                <p className='text-black text-[0.7rem] md:text-[0.8rem]'>I consent to be contacted by Bytecho in response to the information provided in this form.</p>
              </div>
            </label>

            {/* Button */}
            <button 
              className='mt-[1rem] relative mx-auto px-2 lg:px-4 py-1 lg:p-2 bg-blueBranding font-bold text-white w-1/2 flex justify-center text-center ' 
              type='submit'
              // onClick={}
            >
              Submit
            </button>
          </div>
        </form>
    </section>
  )
}
