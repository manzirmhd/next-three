'use client';
import React ,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo1.png'
import {FaTimes, FaSearch  } from 'react-icons/fa';
import { FaRegUser, FaBagShopping  } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";



function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () =>   setClick(!click);
  
    const content = 
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-gray-300 transition'>
        <ul className='text-center text-xl p-20 text-gray-600'>
          <Link href="/" className='no-underline'><li className='my-4 py-4 hover:bg-gray-500 hover:rounded hover:text-gray-300'>Home</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-4 hover:bg-gray-500 hover:rounded hover:text-gray-300'>Menu</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-4 hover:bg-gray-500 hover:rounded hover:text-gray-300'>Blog</li></Link>
          <Link href="/" className='no-underline'><li className='my-4 py-4 hover:bg-gray-500 hover:rounded hover:text-gray-300'>Contact</li></Link>
          <Link href="/" className='underline'><li className='my-4 py-4 hover:bg-gray-500 hover:rounded hover:text-gray-300'>Reservation</li></Link>
          </ul>
      </div>
        
    
    return (
      <div className='bg-gray-300 lg:px-10 sm:px-5'>
        <div className='h-10vh flex justify-between z-50 text-gray-600 lg:py-5 px-20 py-4'>
          <div className='flex items-center flex-1'>
            <Image src={logo} alt='logo' width={90} height={30}/>
          </div>
  
          <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
            <div className='flex-10 '>
              <ul className='flex gap-1 text-sm '>
              <Link href="/" className='no-underline'><li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Home</li></Link>
              <Link href="/" className='no-underline'><li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Menu</li></Link>
              <Link href="/" className='no-underline'><li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Blog</li></Link>
              <Link href="/" className='no-underline'><li className='my-2 py-2 px-4 hover:bg-gray-500 hover:rounded hover:text-gray-300 cursor-pointer'>Contact</li></Link>
              
              </ul>
            </div>

            <div className='flex-10 px-12'>
                <ul className='flex gap-2 text-base '>
                    <Link href="/"><li className='text-base py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaSearch /></li></Link>
                    <Link href="/"><li className='text-base py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaBagShopping /></li></Link>
                    <Link href="/"><li className='text-base py-3 px-3 hover:bg-gray-500 hover:rounded-full hover:text-gray-300 cursor-pointer'><FaRegUser /></li></Link>
                </ul>
            </div>
            <div><Link href="/" className='text-sm underline'>Reservation</Link></div>

          </div> 
          
          <div>
           {click && content}
          </div>
          <button className='block sm:hidden transition' onClick={handleClick}>{ click ? <FaTimes className='text-2xl font-bold'/> : <CiMenuBurger className='text-2xl font-bold'/>}</button>
  
        </div>
      </div>
    )
  }
  
  export default Navbar