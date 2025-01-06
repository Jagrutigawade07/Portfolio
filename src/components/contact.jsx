import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

function contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    const userInfo = {
      name: data.name,
      email:data.email,
      message:data.message
    }
    try {
      await  axios.post("https://getform.io/f/aejjxzlb", userInfo)
      toast.success("Your Message has been sent")
    }
    catch(e) {
    toast.error("Something went wrong")    
  }
  }
  return (
    <>
      <div
      name='Contact'
       className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <span>Please fill the form below to connect me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form
            onSubmit={handleSubmit(onSubmit)} 
            action="https://getform.io/f/aejjxzlb" method='POST' className='bg-slate-200 w-96 px-6 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Full Name</label>
                <input {...register("name", { required: true })}
                 className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='name' type="text" placeholder="write your full Name" id="name" />
                  {errors.name && <span>This field is required</span>}

            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input {...register("email", { required: true })} className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='email' type="text" placeholder="Write your email" id="email" />
                {errors.email && <span>This field is required</span>}

            </div><div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Contact no.</label>
                <input {...register("contactme", { required: true })} className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='contactme' type="text" placeholder="Mobile no." id="contactme" />
                {errors.contactme && <span>This field is required</span>}

            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea {...register("message", { required: true })} className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='message' type="text" placeholder="Write your message here" id="message" />
                {errors.message && <span>This field is required</span>}

            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default contact;  
