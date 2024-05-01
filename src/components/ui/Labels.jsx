import React from 'react'

export default function Labels({label}) {
  return (
    <div className='bg-black-transparent flex justify-center items-center w-fit px-4 h-fit py-1 rounded-full'>
    <span className=' text-white font-poppins md:text-lg lg:text-xl'>
        {label}
    </span>
    </div>
  )
}
