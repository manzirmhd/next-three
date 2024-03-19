'use client'
import React from 'react';
import Image from 'next/image'
import blogImage from '/public/p.jpg'

const BlogCard1 = () => {
  return (
    <div className="h-1/2 max-w-sm rounded overflow-hidden shadow-lg border">
      
      <div className='px-5 py-5 rounded-sm'>
      <Image 
      className="image-full w-full rounded-md" 
      src={blogImage} 
      alt="Card"
      height={300}
      width={150}
      /></div>
     
      <div className="px-6 py-4">
        <div className="flex ">
        <p className='font-bold text-xl mb-2'>Discover Flavours & preservers of the best quality</p>
    
        </div>
        <div className="mt-4">
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

      </div>

      <div className="flex px-6 pb-8">
      <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1 rounded-lg">Read More</button>
        
      </div>

    </div>
  );
};

export default BlogCard1;