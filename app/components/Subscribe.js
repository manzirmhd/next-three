'use client'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full h-1/2 bg-no-repeat bg-center bg-cover' style={{backgroundImage: 'url(subs.jpg)'}}>
     <div className='px-20 py-20'>
      <h1 className=' text-4xl text-white font-bold'>Subscribe for Our Food Update</h1>
      <p className=' text-base text-gray-200 w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

      <div className='flex items-center py-5'>
       
       <input type="email" placeholder="Enter your email"
       className='px-12 py-5 rounded-lg '
       />
        <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white hover:border-none px-3 -ml-24">Subscribe</button>
      </div>
     </div>
    </div>
  )
}

export default Subscribe