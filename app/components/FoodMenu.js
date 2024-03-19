'use client'
import React from 'react'
import FoodMenuCard from './FoodMenuCard'
import Burger from '/public/hawaii-brgr.jpg'
import Pizza from '/public/pizza1.jpg'
import Salad from '/public/c-salad.jpg'
import Turkey from '/public/turkey.jpg'
import Apple from '/public/apple.jpg'
import Energy from '/public/energy.jpg'

const FoodMenu = () => {
  return (
    <div>
        <div className='py-20'>
            <h1 className='text-center text-xl font-bold'>Our Food Menu</h1>
            <p className='text-center text-2xl font-bold'>Our Most Popular Delicious Food</p>

            <div className='flex flex-wrap justify-center items-center gap-5 py-10'>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">All</button>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Burger</button>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Pizza</button>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Subway</button>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Salad</button>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Dessert</button>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Drinks</button>
            </div>

            <div className='flex flex-wrap gap-8 justify-center items-center px-14'>
             <div><FoodMenuCard
             heading="Hawaiin Burger"
             image={Burger}
             /></div>

             <div><FoodMenuCard

             heading="Margheritta Pizza"
             image={Pizza}
             /></div>

             <div><FoodMenuCard

             heading="Ceaser Salad"
             image={Salad}
             /></div>

             <div><FoodMenuCard

             heading="Turkey Breast"
             image={Turkey}
             /></div>

             <div><FoodMenuCard

             heading="Apple Pie"
             image={Apple}
             /></div>

             <div><FoodMenuCard

             heading="Energy Drink"
             image={Energy}
             /></div>
            </div>

            <div className='flex justify-center items-center py-10'>
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">View All Menu</button>
            </div>
        </div>
    </div>
  )
}

export default FoodMenu