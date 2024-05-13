import React, { useState } from 'react';
import Image from 'next/image';
import Title from '@/components/ui/Title';
import Labels from './ui/Labels';
import Anchor from './ui/Anchor';
import Link from 'next/link';
import { usePreciseObserver } from '../../lib/preciseObserver';
import { useEffect, useRef } from 'react';

export default function WorkSection({ subtitle, label1, label2, link, image, href, onClick, alt, video }) {
  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({});
  const ref1 = useRef();
  const myRef = useRef();

  usePreciseObserver(ref1, () => {
    setIsVisible(true);
  });

  return (
    <article className="mb-20">
      <div className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} w-full h-full relative `}>
        <video
          autoPlay
          preload="auto"
          muted
          playsInline
          name="Video Name"
          className="w-full transition-all duration-300 ease-in-out md:h-[500px] lg:h-[700px] object-cover"
          width="100%"
          height="100%"
        >
          <source src={video} />
        </video>
        <div
          ref={ref1}
          className={`${
            isVisible ? 'appear-on-scroll durantion-300 delay-150' : 'before-scroll translate-y-4'
          } absolute z-[2] bottom-4 md:bottom-8 page-content-container`}
        >
          <div className="w-full">
            <Title title={subtitle} variant="largeTitle" />
          </div>
        </div>
      </div>
    </article>
  );
}
