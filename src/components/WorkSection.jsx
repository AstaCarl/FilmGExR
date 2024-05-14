import React, { useState } from 'react';
import Title from '@/components/ui/Title';
import { usePreciseObserver } from '../../lib/preciseObserver';

export default function WorkSection({ subtitle, video }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  usePreciseObserver(ref, () => {
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
          ref={ref}
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
