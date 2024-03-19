'use client'
import React from 'react'
import BlogCard1 from './BlogCard1'
import BlogCard2 from './BlogCard2'
import b2 from '/public/a1.jpg'
import b3 from '/public/a2.jpg'
import b4 from '/public/a4.jpg'

const Blog = () => {
  return (
    <div className=''>
        <div className='px-20 py-28'>
        <h1 className='text-center pb-4'>Our Blog</h1>
        <p className='text-center pb-8 text-4xl font-bold'>Know More About The Article</p>

        <div className='flex flex-wrap gap-8 justify-center items-center'>
            <div><BlogCard1/></div>
            <div className='grid gap-2'>
                <div>
                <BlogCard2
                image={b2}
                /></div>
                <div>
                <BlogCard2
                image={b3}
                /></div>
                <div>
                <BlogCard2
                image={b4}
                /></div>
            </div>
            
        </div>

        <div className='float-right lg:pr-28 pt-5'>
        <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">Explore More</button>
        </div>

        </div>
    </div>

  )
}

export default Blog