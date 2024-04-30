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

    console.log("data!!!", introData)



  return (
    <article className='tw-grid transition-all duration-500 ease-in-out'>
        <div className='col-span-full md:col-span-10 lg:col-span-10 space-y-2 transition-all delay-300 duration-500 ease-in-out'>
            <div className={`${isVisible ? 'opacity-100 translate-y-0 transition-all duration-500 ease-in-out' : 'opacity-0 translate-y-4'}`} ref={ref}>
        <Title variant="pageTitle" title={introData.title}/>
        </div>
        <div className={`${isVisible ? 'opacity-100 translate-y-0 transition-all delay-300 duration-500 ease-in-out' : 'opacity-0 translate-y-8'}`} ref={ref}>
        <Title variant="subtitle" title={introData.subtitle}/>
        </div>
        <div className={`${isVisible ? 'opacity-100 translate-y-0 transition-all delay-500 duration-500 ease-in-out' : 'opacity-0 translate-y-8'}`} ref={ref}>
        <Paragraf paragrafText={introData.paragraf}/>
        </div>
        <div className='flex gap-2'>
        <Anchor variant="arrowLink" href={introData.arrowAnchor.url} title={introData.arrowAnchor.title}>
  </Anchor>
  <Image src={`http://localhost:1337${introData.arrowAnchor.icon.data.attributes.url}`} alt={introData.arrowAnchor.icon.data.attributes.alternativeText} width={24} height={24}/>

  </div>
        </div>
    </article>
  )
}
