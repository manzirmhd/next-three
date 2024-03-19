'use client'
import React from 'react'
import Image from 'next/image'

const BlogCard2 = ({image}) => {
  return (
    <div className="h-48 max-w-xl rounded overflow-hidden shadow-lg border">
        <div className='flex gap-2'>
      
      <div className='w-1/3 px-3 py-3 rounded-sm'>
      <Image 
      className="image-full w-full rounded-md" 
      src={image} 
      alt="Card"
      height={100}
      width={100}
      /></div>
     
      <div className="w-2/3 px-5 py-2">
        <div className="flex ">
        <p className='font-bold text-lg'>Discover Flavours & preservers of the best quality</p>
    
        </div>
        <div className=" mb-2">
        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="flex pb-2">
        <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-0 rounded-md">Read More</button>
        </div>

      </div>

      </div>
    </div>
  )
}

export default BlogCard2