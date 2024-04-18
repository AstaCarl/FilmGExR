import React, { useEffect, useState } from 'react'
import Paragraf from './Paragraf'
import Title from './ui/Title'
import { useIntersectionObserver } from '../../lib/interSectionObserver';


export default function TitleWithParagraf() {
    const [isVisible, setIsVisible] = useState(false);

    const ref = useIntersectionObserver(() => {
      setIsVisible(true);
    });



  return (
    <article className='tw-grid transition-all duration-500 ease-in-out'>
        <div className='col-span-full md:col-span-10 lg:col-span-10 space-y-2 transition-all delay-300 duration-500 ease-in-out'>
            <div className={`${isVisible ? 'opacity-100 translate-y-0 transition-all duration-500 ease-in-out' : 'opacity-0 translate-y-4'}`} ref={ref}>
        <Title variant="pageTitle" title="One stop shop"/>
        </div>
        <div className={`${isVisible ? 'opacity-100 translate-y-0 transition-all delay-300 duration-500 ease-in-out' : 'opacity-0 translate-y-8'}`} ref={ref}>
        <Title variant="subtitle" title="Unique technology for unique projects"/>
        </div>
        <div className={`${isVisible ? 'opacity-100 translate-y-0 transition-all delay-500 duration-500 ease-in-out' : 'opacity-0 translate-y-8'}`} ref={ref}>
        <Paragraf paragrafText="FilmGExR gives you full service for all your virtual production needs. We work closely with film directors, cinematogaphers,  production companies and ad agencies to help bring their cinematic vision to life"/>
        </div>
        </div>
    </article>
  )
}
