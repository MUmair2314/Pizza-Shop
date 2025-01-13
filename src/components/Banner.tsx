import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-[#967259] to-[#634832] font-family px-6 py-12 mb-7 '>
    <div className='absolute inset-0 opacity-30'>
  <Image
  src="/assets/Pizza-banner1.webp"
  alt="coffee banner"
  width={1000}
  height={1000}
  className='w-full h-full object-cover'
  />
    </div>

    <div className='relative z-10 container mx-auto flex flex-col justify-center items-center'>
     <h2 className=' text-2xl md:text-5xl font-bold text-white mb-4'>
     Discover The Yummy Fast Food In Town
     </h2>
      <p className='text-white text-center text-lg mb-6 max-w-xl'>
      Shop our collection of premium fast food items, including delicious items, made with the finest ingredients sourced from around the world.
      </p>

      <button 
      type='button'
      className='hover:bg-white hover:text-[#f5bd8c] px-6 py-3 rounded-full shadow-lg shadow-[#f5bd8c] font-semibold bg-[#634832] hover:scale-105 text-white transition-colors duration-300'>
        Shop Now For The Yummy Food
      </button>
    </div>

    </div>
  )
}
