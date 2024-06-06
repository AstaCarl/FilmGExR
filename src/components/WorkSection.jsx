import React, { useState, useRef } from 'react';
import Title from '@/components/ui/Title';
import { usePreciseObserver } from '../../lib/preciseObserver';

// WorkSection component for cases page
export default function WorkSection({ subtitle, video }) {
  // State for visibility, initially set to false
  const [isVisible, setIsVisible] = useState(false);
  // Reference for the div and video elements
  const ref = useRef();

  // Use precise observer to set visibility to true when the referenced element is in view
  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

  return (
    <article>
      <div
        ref={ref}
        className={`${isVisible ? 'appear-on-scroll delay-150' : 'before-scroll'} w-full h-full relative `}
      >
        <video
          loop
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
            isVisible ? 'appear-on-scroll duration-300 delay-300' : 'before-scroll translate-y-4'
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
