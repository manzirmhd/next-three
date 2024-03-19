'use client'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className='flex justify-center items-center'>
        <ul className='gap-8'>
            <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaFacebookF /></li>
            <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaInstagram/></li>
            <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaTwitter/></li>
            <li className='py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaLinkedin/></li>
        </ul>
    </div>
  )
}

export default SocialIcons