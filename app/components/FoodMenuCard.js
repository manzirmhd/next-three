'use client'
import React from 'react';
import Image from 'next/image'

const FoodMenuCard = ({ image, heading }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border">
      
      <div className='px-5 py-5 rounded-sm'>
      <Image 
      className="image-full w-full rounded-md" 
      src={image} 
      alt="Card"
      height={300}
      width={150}
      /></div>
     
      <div className="px-6 py-4">
        <div className="flex ">
        <p className='font-bold text-xl mb-2'>{heading}</p>
        <span className="text-sm ml-auto">Rating</span>
        </div>
        <div className="mt-4">
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

      </div>

      <div className="flex px-6 py-4">
      <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1 rounded-3xl">Add to cart</button>
        <span className="ml-auto font-bold text-xl text-orange-500">$14.99</span>
      </div>

    </div>
  );
};

export default FoodMenuCard;

/**/