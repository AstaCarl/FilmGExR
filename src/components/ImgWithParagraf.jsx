import React, { useRef, useEffect, useState } from 'react'
import ResponsiveImg from './ResponsiveImg'
import Image from 'next/image'
import defaultImage from '../../public/assets/default.png'
import Title from './ui/Title'
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Paragraf from './Paragraf'


export default function ImgWithParagraf({paragrafText, title}) {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });


  return (
    <article className='flex items-center py-36 bg-off-white rounded-lg'>
        <div ref={ref} className={`${isVisible ? 'opacity-100 blur-none transition-all duration-700 ease-in-out' : 'blur-sm opacity-0'} `}>
              <div className='md:flex md:justify-between'>
                <div className='flex flex-col gap-4 md:justify-center md:w-2/5'>
        <Title title={title} variant="subtitle"/>
        <Paragraf className="text-lg" paragrafText={paragrafText}/>
        </div>
        <div className='w-full md:w-1/2'>
        <Image src={defaultImage} alt="default" width={1000} height={1000} className='rounded-md mt-6 md:mt-0'/>
        </div>
        </div>
        </div>
    </article>
  )
}
