'use client'
import React from 'react'

const Pizza = () => {
  return (
    <div className='w-full h-1/2 bg-orange-500' style={{backgroundImage: 'url()'}}>
     <div className='pl-20 py-20'>
      <h1 className='uppercase text-4xl text-white font-bold'>margarita pizza</h1>
      <p className='uppercase text-2xl text-white font-bold'>30% off sunday only</p>

      <div className='flex gap-5 py-5'>
      <button className="btn bg-transparent text-white border-white hover:bg-white hover:text-orange-500 px-5 py-1">Book a Table</button>
      <button className="btn bg-transparent text-white border-white hover:bg-white hover:text-orange-500 px-5 py-1">Make Menu</button>
      </div>
     </div>
    </div>
  )
}

export default Pizza