'use client'
import React from 'react'
import Image from 'next/image'
import logo from '/public/logo1.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='w-full h-1/2 bg-gray-200'>
            <div className='px-28 py-20'>
                <div className='flex flex-wrap items-center justify-between gap-8'>
                    <Image src={logo} alt='logo' width={150} height={50}/>
                    <div>
                        <ul className='flex gap-3'>
                            <li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Home</li>
                            <li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Menu</li>
                            <li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Blog</li>
                            <li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>
              
              <div className='flex flex-wrap items-center justify-between pt-10 gap-8'>
                <div className='flex gap-2'><p className='font-medium'>Proudly Powered by</p>
                      <p className='text-orange-500 font-medium'>Foodies</p>
                </div>
                <div className=''>
                <ul className='flex gap-3'>
                   <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaFacebookF /></li>
                   <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaInstagram/></li>
                   <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaTwitter/></li>
                   <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaLinkedin/></li>
                </ul>
               </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Footer