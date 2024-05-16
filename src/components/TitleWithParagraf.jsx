import React, { useState } from 'react';
import Paragraf from './Paragraf';
import Title from './ui/Title';
import { useIntersectionObserver } from '../../lib/interSectionObserver';

export default function TitleWithParagraf({ title, subtitle, paragraf, variant, componentvariant }) {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  return (
    <article
      className={`${
        componentvariant === 'opposite' ? 'md:text-end' : ''
      } tw-grid transition-all duration-500 ease-in-out`}
    >
      <div
        className={`space-y-4 col-span-full ${
          componentvariant === 'opposite' ? ' md:col-start-2' : ' lg:col-span-10 '
        }`}
      >
        <div className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
          <Title variant={variant} title={title} />
        </div>
        <div className={`${isVisible ? 'appear-on-scroll delay-200' : 'before-scroll'}`} ref={ref}>
          <Title variant="subtitle" title={subtitle} />
        </div>
        <div
          className={`${isVisible ? 'md:w-2/3 appear-on-scroll delay-300' : 'before-scroll'} ${
            componentvariant === 'opposite' ? ' md:w-full md:flex md:justify-end' : ''
          }`}
          ref={ref}
        >
          <Paragraf
            paragrafText={paragraf}
            className={`${componentvariant === 'opposite' ? 'md:text-end md:w-2/3' : ''}`}
          />
        </div>
      </div>
    </article>
  );
}
