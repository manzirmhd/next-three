'use client'
import React from 'react'

const AboutUs = () => {
  return (
<div>
    <div className='h-screen w-screen bg-no-repeat bg-contain bg-cover bg-center' style={{backgroundImage: 'url(abt1.jpg)'}}>
        <div className='float-right pt-20 px-20 pr-60'>
             <h1 className='py-5 text-lg'>About Us</h1>
             <div className='text-3xl font-extrabold pb-5'>
                <div className='flex flex-wrap'>
                <h1>Discover Your</h1>
                <p className='text-orange-500 pl-2'>favorite food</p>
                </div>
                <p>within our restaurent</p>
             </div>
             <p className='font-bold pb-5'>One-of-a-kind home dining for you</p>
             <p className='w-96 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
             <button className="btn btn-outline">Read More</button>
        </div>
    </div>
</div>    
  )
}

export default AboutUs