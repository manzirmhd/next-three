'use client'
import React from 'react'
import ChooseCard from './ChooseCard'
import quality from '/public/burger2.png'
import order from '/public/order.png'
import chef from '/public/chef.png'
import delivery from '/public/delivery.png'

const Choose = () => {
  return (
    <div className='h-1/2 w-screen bg-no-repeat bg-contain bg-cover bg-center' style={{backgroundImage: 'url(choose.avif)'}}>
      <div className="px-10 py-10">
        <h1 className='text-white text-center'>Why choose us?</h1>
        <p className='text-white text-center text-2xl font-medium'>Why Are we the best?</p>
        <div className='flex flex-wrap justify-center items-center gap-8 py-10'>

            <div><ChooseCard
            imageUrl={quality}
            heading="Quality Maintain"
            /></div>

            <div><ChooseCard
            imageUrl={order}
            heading="Easy To Order"
            /></div>

            <div><ChooseCard
            imageUrl={chef}
            heading="Expert Chef"
            /></div>

            <div><ChooseCard
            imageUrl={delivery}
            heading="Fastest Delivery"
            /></div>
        </div>
      </div>
    </div>
  )
}

export default Choose