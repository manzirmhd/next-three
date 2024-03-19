'use client'
import React from 'react'
import Image from 'next/image'

const ChooseCard = ({ imageUrl, heading }) => {
  return (
    <div className="card w-56 h-64 bg-base-100 shadow-xl hover:shadow-orange-500 cursor-pointer rounded-md">
        <figure className="px-2 pt-10">
          <Image 
          src={imageUrl}
          width={100}
          height={200} 
          alt="foods" 
          className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <p className='text-base font-bold'>{heading}</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> 
        </div>
      </div>
  )
}

export default ChooseCard