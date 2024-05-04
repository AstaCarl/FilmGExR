import React, { useEffect, useState } from 'react'
import Paragraf from './Paragraf'
import Title from './ui/Title'
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Anchor from './ui/Anchor';


export default function TitleWithParagraf({introData, title, subtitle, paragraf}) {
    const [isVisible, setIsVisible] = useState(false);

    const ref = useIntersectionObserver(() => {
      setIsVisible(true);
    });




  return (
    <article className='tw-grid transition-all duration-500 ease-in-out'>
        <div className='col-span-full md:col-span-full lg:col-span-10 space-y-4'>
            <div className={`${isVisible ? 'blur-none opacity-100 translate-y-0 transition-all duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-2'}`} ref={ref}>
             
        <Title variant="pageTitle" title={title}/>
        </div>
        <div className={`${isVisible ? 'blur-none opacity-100 translate-y-0 transition-all delay-200 duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-4'}`} ref={ref}>
        <Title variant="subtitle" title={subtitle}/>
        </div>
        <div className={`${isVisible ? 'md:w-2/3 blur-none opacity-100 translate-y-0 transition-all delay-300 duration-1000 ease-in-out' : 'blur-[2px] opacity-0 translate-y-4'}`} ref={ref}>
        <Paragraf paragrafText={paragraf}/>
        </div>
        </div>
    </article>
  )
}
