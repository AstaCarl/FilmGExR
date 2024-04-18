import React, { useRef, useEffect, useState } from 'react'
import ResponsiveImg from './ResponsiveImg'
import defaultImage from '../../public/assets/default.png'
import Title from './ui/Title'
import Paragraf from './Paragraf'


export default function ImgWithParagraf({}) {




  return (
    <article className='flex flex-col gap-2 my-20 container '>
        <div className='py-20 sticky scroll-smooth h-screen top-0 bg-off-white rounded-lg transition-opacity'>
            <div className='md:flex'>
                <div className='md:flex md:flex-col md:justify-center gap-4'>
        <Title title="Cost and time efficient" variant="subtitle"/>
        <Paragraf paragrafText="Easily switch between different locations in a click of a button"/>
        </div>
        <ResponsiveImg
        src={defaultImage}
        size_base="100vw"
        size_md="50vw"
        size_lg="33vw"
        className='rounded-md mt-6 md:mt-0'
        />
        </div>
        </div>
        <div  className='py-20 sticky h-screen bg-off-white rounded-lg'>
            <div>
        <Title title="Cost and time efficient" variant="subtitle"/>
        <Paragraf paragrafText="Easily switch between different locations in a click of a button"/>
        <ResponsiveImg
        src={defaultImage}
        size_base="100vw"
        size_md="50vw"
        size_lg="33vw"
        className='rounded-md mt-6'
        />
        </div>
        </div>
    </article>
  )
}
