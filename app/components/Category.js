'use client'
import React from 'react'
import CategoryCard from './CategoryCard'
import Burger2 from '/public/burger2.png'
import b1 from '/public/b1.png'
import subway from '/public/sub.png'
import salad from '/public/salad.png'
import dessert from '/public/dessert.png'
import drink from '/public/drink.png'

const Category = () => {
  return (
    <div>
    <div className='px-10 py-20'>
        <div className="justify-center items-center pb-10">
            <h1 className='text-xl text-center pb-3'>Category</h1>
            <h1 className='text-3xl text-center font-extrabold'>Our Delicious Foods Category</h1>
        </div>
        
        <div className='flex flex-wrap gap-8 justify-center items-center px-10'>
            <div><CategoryCard
            imageUrl={Burger2}
            heading= "Burger"/></div>

            <div><CategoryCard
            imageUrl={b1}
            heading= "pizza"/></div>

            <div><CategoryCard
            imageUrl={subway}
            heading= "subway"/></div>

            <div><CategoryCard
            imageUrl={salad}
            heading= "salad"/></div>

            <div><CategoryCard
            imageUrl={dessert}
            heading= "desserts"/></div>

            <div><CategoryCard
            imageUrl={drink}
            heading= "drinks"/></div>    

        </div>

    </div>
    </div>
  )
}

export default Category