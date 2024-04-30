import React from 'react'
import Title from './ui/Title';
import Paragraf from './Paragraf';
import Image from 'next/image';
import testImage from '../../public/assets/test1png.png';
import Anchor from './ui/Anchor';


export default function StudioModels({title, paragraf}) {
  return (
    <div className='flex flex-col text-end items-end gap-4'>
      <Title title={title} variant="pageTitle"/>
      <Paragraf className="text-lg" paragrafText={paragraf}/>
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
