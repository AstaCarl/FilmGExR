import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Title from './ui/Title';
import Paragraf from './Paragraf';
import { usePreciseObserver } from '../../lib/preciseObserver';

export default function ImgWithParagraf({ paragrafText, title, subtitle, src, alt, anchor }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

  return (
    <article className={`h-screen lg:-mt-36 flex items-center bg-off-white rounded-lg`}>
      <div ref={ref} className={`${isVisible ? 'appear-on-scroll duration-1000' : 'before-scroll'} `}>
        <div className="page-content-container hidden lg:block">
          <Title title={title} variant="pageTitle" />
        </div>
        <div className="tw-grid ">
          <div className="col-span-full py-10 lg:col-span-5 lg:place-content-center page-content-container lg:pr-0">
            <div className="mb-8 lg:hidden">
              <Title title={title} variant="pageTitle" />
            </div>
            <Title title={subtitle} variant="subtitle" />
            <Paragraf className="pt-2 lg:text-lg" paragrafText={paragrafText} />
            {anchor}
          </div>
          <Image
            src={src}
            alt={alt}
            width={2000}
            height={2000}
            className="lg:rounded-md  w-full col-span-full lg:col-span-7"
          />
        </div>
      </div>
    </article>
  );
}
