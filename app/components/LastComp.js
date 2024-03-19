'use client'
import React from 'react'
import LastCompCard from './LastCompCard'
import clock from '/public/clock.png'
import lcn from '/public/location.png'
import contact from '/public/contact.png'


const LastComp = () => {
  return (
    <div>
    <div className='px-20 py-28 flex flex-wrap justify-center items-center gap-8'>
<div><LastCompCard
        image={clock}
        heading="Opening Hours"
        paragraphOne="Sun - Thur : 9.00am - 10.00pm"
        paragraphTwo="Fri - Sat : 10.00am - 12.00pm"
        /></div>

<div><LastCompCard
        image={lcn}
        heading="Location"
        paragraphOne="Restaurent & party Center 122/4"
        paragraphTwo="Park road, NZ 1234567"
        /></div>

<div><LastCompCard
        image={contact}
        heading="Contact"
        paragraphOne="Email:info@foodies.com"
        paragraphTwo="Phone: +94 12 345 6789"
        /></div>
    </div>
    </div>
  )
}

export default LastComp