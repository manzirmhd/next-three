'use client'
import React from 'react'
import Image from 'next/image'

const CategoryCard = ({ imageUrl, heading }) => {
    return (
        <div className="card w-36 h-52 bg-base-100 shadow-2xl hover:shadow-orange-500 cursor-pointer">
        <figure className="px-10 pt-10">
          <Image 
          src={imageUrl}
          width={100}
          height={200} 
          alt="foods" 
          className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className='uppercase text-base font-medium'>{heading}</p>
           
        </div>
      </div>
    );
  };
  
  export default CategoryCard;