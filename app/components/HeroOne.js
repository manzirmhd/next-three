'use client'
import React from 'react'
import SocialIcons from './SocialIcons'
import HeroCard from './HeroCard'

const HeroOne = () => {
  return (
    
<div className='h-screen w-screen bg-no-repeat  bg-cover bg-center' style={{backgroundImage: 'url(h1.jpg)'}}>
    
    <div className='px-28 py-20 text-5xl font-bold'>
        <h1 className='text-black'>The Delicious Food For Your</h1>
        <h1 className='text-orange-600'>Friends & Family</h1>
    </div>
    <div className='float-left px-16'><SocialIcons/></div>
    

    <div className='w-1/2 float-right px-24'>
        <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="btn bg-transparent border-orange-500 hover:bg-orange-500 text-gray-700 px-5 py-1 mr-5 mt-2">View our menu</button>
        <button className="btn bg-transparent border-orange-500 hover:bg-orange-500 text-gray-700 px-5 py-1 mt-2">Book a Table</button>
    </div>

    <div className='float-right w-1/2 px-24 pt-5'>
   <HeroCard
    title="Hawaiin Burger"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    imageUrl="burger.jpg"
    buttonText="Order Now"/>
    </div>

    
</div>
 
  )
}

export default HeroOne
