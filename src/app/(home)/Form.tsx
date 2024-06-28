'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Lottie from 'lottie-react'
import Image from 'next/image'

// Assets
import Logo from '../../../assets/blue-logo.png'
import Indicate from '../../../assets/form-image.png'
import Success from '../../../assets/success.json'

// Amplify configuration
import config from '@/amplifyconfiguration.json'
import { Amplify } from 'aws-amplify'
import { post } from 'aws-amplify/api'


// Api key
const apiKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY;

Amplify.configure(config, {
  API: {
    REST: {
      headers: async () => {
        return { 'X-Api-Key': apiKey || '' };
      }
    }
  }
});


export default function Form() {
  
  // State Hooks
  const [buttonText, setButtonText] = useState("Submit")
  const [isSending, setIsSending] = useState(false)

  // State to render or hide form when success sending message
  const [renderForm, setRenderForm] = useState(true);
  const [renderSuccessMessage, setRenderSuccessMessage] = useState(false);

  // State to render error when sending message
  const [renderErrorMessage, setRenderErrorMessage] = useState(false);

  // Functions
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      service: "Commercial cleaning",
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
      phoneNumber: Yup.string()
        .min(10, "Please provide a valid phone number")
        .required("Phone number is required"),
      description: Yup.string()
        .min(20, "Please leave us a more detailed description about your premises")
        .required('A premises description is required'),
      terms: Yup.array().required("Terms of service must be checked")
    }),
    onSubmit: async(values) => {
      setButtonText('Sending...')
      setIsSending(true)
      try {
        let resOperation = post({
          apiName: 'generalQuotes',
          path: '/create',
          options: {
            body: {
              values
            }
          }
        })

        if((await resOperation.response).statusCode == 200) {
          setRenderForm(!renderForm)
          setRenderSuccessMessage(true)
          setTimeout(() => {
            setButtonText("Message sent")
            setIsSending(false)
          }, 2000)
        } else {
          setRenderForm(false)
          setRenderErrorMessage(true)
          setTimeout(() => {
            setButtonText('Message not sent')
            setIsSending(false)
          }, 2000)
        }
      } catch (error) {
        console.log("error", error)
        setRenderForm(false)
        setRenderErrorMessage(true)
        setTimeout(() => {
          // Reset the button text and indicate that the form has been sent
          setButtonText('Message not sent');
          setIsSending(false);
        }, 4000);
      }
    }
  })

  return (
    <section className='px-[1rem] py-[3rem] sm:mx-auto sm:px-[2rem] md:px-[4rem] lg:px-[8rem] bg-blueBranding' id='contact' >
        {renderForm && (
          <form 
            className='relative page 2xl:w-3/4 2xl:mx-auto lg:px-[4rem] border shadow-xl bg-gradient-to-tl from-gray-200 to-white lg:flex ' 
            onSubmit={formik.handleSubmit}
          >
            <div className="lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center gap-[2rem]">
              <Image 
                src={Logo} 
                className='h-[8rem] lg:h-[10rem] w-auto  '
                title='Blueline Logo'
                alt='Blueline Logo'
              />
              <Image 
                src={Indicate}
                className='hidden lg:block ml-[5rem] w-[25rem] opacity-80 '
                title='Blueline worker'
                alt='Blueline worker inviting to fill the form'
              />

            </div>
            <div className="page lg:px-0 flex flex-col gap-[1rem]">
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

              {/* Phone */}
              <label htmlFor="phoneNumber" className='flex flex-col gap-[0.5rem]'>
                <span className={`${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'text-red-400' : 'text-blueBranding'}`}>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber 
                    ? formik.errors.phoneNumber 
                    : 'Phone number'
                  }
                </span>
                <input 
                  required 
                  type="tel" 
                  name='phoneNumber' 
                  value={formik.values.phoneNumber} 
                  onChange={formik.handleChange} 
                  placeholder='Enter your phone number' 
                  onBlur={formik.handleBlur}
                  className='form-input'
                />
              </label>

              {/* Service */}
              <label htmlFor="service" className='flex flex-col gap-[0.5rem]'>
                <span className='text-blueBranding'>Service type</span>
                  <div className=''>
                    <select name="service" value={formik.values.service} onChange={formik.handleChange} className='bg-transparent rounded w-full px-0 text-black'>
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
                      : 'Service description'
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
                  <p className='text-black text-[0.7rem] md:text-[0.8rem]'>I consent to be contacted by Blueline in response to the information provided in this form.</p>
                </div>
              </label>

              {/* Button */}
              <button 
                className='mt-[1rem] relative mx-auto px-2 lg:px-4 py-1 lg:p-2 bg-blueBranding font-bold text-white w-1/2 flex justify-center text-center ' 
                type='submit'
                // onClick={}
              >
                {buttonText}
              </button>
            </div>
          </form>
        )}

         {/* Render succes animation */}
         {!renderForm && renderSuccessMessage && (
          <div className='flex flex-col  items-center'>
            <Lottie 
              className='w-[12rem] lg:w-[26rem] xl:w-[30rem] '
              animationData={Success}
              loop={true}
            />
            {/* <div className='border-b-2 border-pink-200 w-1/3'></div> */}
            <h3 className='mt-[2rem] text-white text-[1.25rem] xl:text-[1.875rem] font-semibold'>Your message has been sent!</h3>
            <p className='text-white'>Our team will get in touch shortly.</p>
          </div>
         )}
    </section>
  )
}
