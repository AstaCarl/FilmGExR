import React, { useEffect, useState } from 'react'
import Paragraf from './Paragraf'
import Title from './ui/Title'
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Anchor from './ui/Anchor';
import Image from 'next/image';


export default function TitleWithParagraf({introData}) {
    const [isVisible, setIsVisible] = useState(false);

    const ref = useIntersectionObserver(() => {
      setIsVisible(true);
    });




  return (
    <article className='tw-grid transition-all duration-500 ease-in-out page-content-container'>
        <div className='col-span-full md:col-span-full lg:col-span-10 space-y-4'>
            <div className={`${isVisible ? 'blur-none opacity-100 translate-y-0 transition-all duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-2'}`} ref={ref}>
        <Title variant="pageTitle" title={introData.title}/>
        </div>
        <div className={`${isVisible ? 'blur-none opacity-100 translate-y-0 transition-all delay-200 duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-4'}`} ref={ref}>
        <Title variant="subtitle" title={introData.subtitle}/>
        </div>
        <div className={`${isVisible ? 'md:w-2/3 blur-none opacity-100 translate-y-0 transition-all delay-300 duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-4'}`} ref={ref}>
        <Paragraf paragrafText={introData.paragraf}/>
        </div>
        <div className={`${isVisible ? 'blur-none translate-y-0 transition-all delay-400 duration-1000 ease-in-out' : 'blur-[2px] translate-y-4'} flex gap-2 h-48 items-end`}>
        <Anchor variant="arrowLink" href={introData.arrowAnchor.url} title={introData.arrowAnchor.title}>
  </Anchor>
  <Image src={`http://localhost:1337${introData.arrowAnchor.icon.data.attributes.url}`} alt={introData.arrowAnchor.icon.data.attributes.alternativeText} width={40} height={40}/>

  </div>
        </div>
    </article>
  )
}
