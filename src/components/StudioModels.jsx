import React, { useState } from 'react'
import Title from './ui/Title';
import Paragraf from './Paragraf';
import Image from 'next/image';
import testImage from '../../public/assets/test1png.png';
import Anchor from './ui/Anchor';
import { useIntersectionObserver } from '../../lib/interSectionObserver';


export default function StudioModels({title, paragraf}) {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  return (
    <div className=' flex flex-col text-end items-end gap-4'>
      <div className={` ${isVisible ? 'blur-none opacity-100 translate-y-0 transition-all duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-2'}`} ref={ref}>
      <Title title={title} variant="pageTitle" />
      </div>

      <Paragraf className="text-lg md:w-2/3" paragrafText={paragraf}/>
      <ul className='flex gap-4'>
        <li>
          <Anchor variant="nav" href="/studio-models" title="Warehouse"/>
        </li>
        <li>
        <Anchor variant="nav" href="/studio-models" title="Studio 1"/>
        </li>
        <li>
        <Anchor variant="nav" href="/studio-models" title="Studie 2"/>
        </li>
      </ul>
      <div className=''>
      <Image src={testImage} alt="default" width={2000} height={2000} className='w-full'/>
      </div>
    </div>
    
  )
}
