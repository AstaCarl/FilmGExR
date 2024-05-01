import React from 'react'
import Image from 'next/image';
import Title from '@/components/ui/Title';
import Labels from './ui/Labels';
import Anchor from './ui/Anchor';

export default function WorkSection({title, subtitle, label1, label2, link, image}) {
  return (
    <article className='flex flex-col md:justify-center md:items-center gap-4 pb-52 page-content-container md:relative'>
            <Image src={image} alt="default" width={2000} height={2000} className='w-full md:w-[90%] rounded-md md:relative'/>
            <div className='md:absolute md:flex md:justify-between md:top-1/2 lg:top-2/3 w-[80%]'>
            <div className='mt-[-70px] md:mt-0 md:ml-[-52px] '>
            <Title title={subtitle} variant='largeTitle' />
            </div>
            <div className='flex gap-4 md:flex-col md:items-end'>
            <Labels label={label1}/>
            <Labels label={label2}/>
            </div>
            </div>
            <div className='md:hidden'>
            <Anchor href="#" title={link} variant="smallArrowLink"/>
            </div>
    </article>
  )
}
