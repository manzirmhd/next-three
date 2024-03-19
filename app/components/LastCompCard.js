'use client'
import React from 'react'
import Image from 'next/image'


const LastCompCard = ({image, heading, paragraphOne, paragraphTwo}) => {
  return (
    <div className='w-80 h-36 border rounded-md'>
        <div className='px-5 py-5'>
            <div className='flex'>
            <Image src={image} alt='last' className=''/>
                <h1 className='text-lg font-bold text-center px-2'>{heading}</h1>
            </div>
            <div className='text-center pt-3 text-gray-700'>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
            </div>
        </div>

    </div>
  )
}

export default LastCompCard
/**<Image src={} alt='last' className=''/> */