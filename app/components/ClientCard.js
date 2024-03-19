'use client'
import React from 'react'
import Image from 'next/image'

const ClientCard = ({image, heading}) => {
  return (
    <div className='h-52 max-w-lg border rounded-md bg-white'>
        <div className='px-5 py-5 flex gap-2'>
            <div>
                <p className='pb-2'>Rating</p>
                <p className='pb-4 text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <p className='text-lg font-bold'>{heading}</p>
                <p className='text-sm'>Manager All Group</p>
            </div>
            <div className='rounded-md'>
            <Image 
                src={image} 
                alt='client' 
                width={500} 
                height={800}
                className='rounded-md'
                />
                
            </div>
        </div>

    </div>
  )
}

export default ClientCard
/*  */