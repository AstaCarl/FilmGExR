import React, { useState } from 'react';
import Paragraf from './Paragraf';
import Title from './ui/Title';
import { useIntersectionObserver } from '../../lib/interSectionObserver';

export default function TitleWithParagraf({ introData, title, subtitle, paragraf, variant, componentvariant }) {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  return (
    <article
      className={`${componentvariant === 'opposite' ? 'text-end' : ''} tw-grid transition-all duration-500 ease-in-out`}
    >
      <div
        className={`space-y-4 col-span-full ${
          componentvariant === 'opposite' ? ' md:col-start-2' : ' lg:col-span-10 '
        }`}
      >
        <div className={`${isVisible ? 'appear-on-scroll' : 'blur-[2px] opacity-0 translate-y-2'}`} ref={ref}>
          <Title variant={variant} title={title} />
        </div>
        <div className={`${isVisible ? 'appear-on-scroll delay-200' : 'blur-[2px] opacity-0 translate-y-4'}`} ref={ref}>
          <Title variant="subtitle" title={subtitle} />
        </div>
        <div
          className={`${isVisible ? 'md:w-2/3 appear-on-scroll delay-300' : 'blur-[2px] opacity-0 translate-y-4'} ${
            componentvariant === 'opposite' ? ' md:w-full flex justify-end' : ''
          }`}
          ref={ref}
        >
          <Paragraf
            paragrafText={paragraf}
            className={`${componentvariant === 'opposite' ? 'text-end md:w-2/3' : ''}`}
          />
        </div>
      </div>
    </article>
  );
}
