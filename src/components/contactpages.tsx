'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import {useForm} from "react-hook-form"
import { data } from 'motion/react-client';
interface Data{

  Email:string
  message:string
}
export default function Contactpages() {
  
    const {
        register,
        formState:{errors},
        handleSubmit
        ,setValue
    }=useForm<Data>();

     const submitHandler=async(data:Data)=>{
      console.log(data)
      setValue("Email","");
      setValue("message","")
     }
    return (
      <div>
             <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
            <h2 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h2>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center"> We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
       
       <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 mt-4 max-w-md mx-auto" >
        <div>
          <label htmlFor="Email"></label>
          <input    className="rounded-lg border border-neutral-800 focus:ring-2 text-white focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700" type="email" placeholder='Your Email Address' {...register("Email",{
              required:true
            })} />
            {
              errors.Email && (
                <span>
                  Email Is Required
                </span>
              )
            }
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea 
           className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full h-[200px] p-4 bg-neutral-950 placeholder:text-neutral-700 text-white" placeholder='Your Message' {...register("message",{
              required:true
            })} />
            {
              errors.message && (
                <span>
                  Message Is Required
                </span>
              )
            }
        </div>
        <button type='submit'   className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
          Send Message
        </button>

       </form>
     
      </div>
      </div>
      <BackgroundBeams/>
      </div>
    )
}
