'use client'
import React from 'react'
import ClientCard from './ClientCard'
import c1 from '/public/foodr1.webp'
import c2 from '/public/foodr2.jpg'

const Clients = () => {
  return (
    <div className='bg-orange-100'>
        <div className='lg:px-24 sm:px-10 md:px-10 py-20'>
            <h1 className='pb-5'>heading</h1>
            <div className='flex justify-between pb-5'>
                <p className='text-4xl font-bold'>What Clients say About us</p>
                <div className="join">
                     <button className="join-item btn bg-white rounded-full hover:bg-orange-500">«</button>
                     <button className="join-item btn bg-white rounded-full hover:bg-orange-500">»</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-8'>
                <ClientCard
                heading="Eithen Howard"
                image={c1}
                />

                <ClientCard
                heading="Carlos Samuel"
                image={c2}
                />
                
            </div>
        </div>
    </div>
  )
}

export default Clients