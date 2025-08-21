import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <section>
      <div className='w-full flex justify-between items-center font-semibold   '>
     <div className='flex items-center gap-2'>
        <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_left} alt="" />
        <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_right} alt="" />
  </div>
  <div className="flex  items-center  gap-4">
    <p className='font-bold bg-white text-black text-[15px] px-4 rounded-2xl hidden md:block cursor-pointer '>Explore Premium</p>
    <p className='bg-black  px-3 rounded-2xl text-[15px] font-semibold  '>Install</p>
  </div>
  
      </div>
    </section>
  )
}

export default Navbar
