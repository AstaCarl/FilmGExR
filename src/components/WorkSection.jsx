import React, { useState } from 'react';
import Image from 'next/image';
import Title from '@/components/ui/Title';
import Labels from './ui/Labels';
import Anchor from './ui/Anchor';
import Link from 'next/link';
import { usePreciseObserver } from '../../lib/preciseObserver';
import { useEffect, useRef } from 'react';

export default function WorkSection({ subtitle, label1, label2, link, image, href, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({});
  const ref1 = useRef();
  const myRef = useRef();

  usePreciseObserver(ref1, () => {
    setIsVisible(true);
  });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       const scale = 0.5 + 0.5 * (1 - entry.intersectionRatio);
  //       const opacity = 1 - entry.intersectionRatio;
  //       setStyle({
  //         transition: 'transform 0.3s ease-in',
  //         transform: `scale(${scale})`,
  //       });
  //     },
  //     {
  //       rootMargin: '0px 0px -80% 0px', // start the intersection when the element is halfway out of view
  //       threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  //     }
  //   );

  //   if (myRef.current) {
  //     observer.observe(myRef.current);
  //   }

  //   return () => {
  //     if (myRef.current) {
  //       observer.unobserve(myRef.current);
  //     }
  //   };
  // }, []);

  return (
    // <Link
    //   href={`${href}`}
    //   ref={myRef}
    //   style={style}
    //   onClick={onClick}
    //   className="flex flex-col md:justify-center items-center gap-6 pb-52 relative cursor-default transition-all duration-500"
    // >
    //   <div
    //     className={`${
    //       isVisible ? 'appear-on-scroll' : 'before-scroll'
    //     } w-full relative inline-block md:w-[800px] overflow-hidden bg-cover bg-no-repeat  rounded-md cursor-pointer lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px]`}
    //   >
    //     <Image
    //       src={image}
    //       alt="default"
    //       width={400}
    //       height={400}
    //       className={` w-full transition-all duration-300 ease-in-out  lg:w-full`}
    //     />
    //   </div>
    //   <div
    //     ref={ref1}
    //     className={`${
    //       isVisible ? 'appear-on-scroll durantion-300 delay-150' : 'before-scroll translate-y-4'
    //     } absolute z-[2] cursor-pointer flex flex-col items-center w-full lg:w-[85%] gap-4 md:flex-row md:justify-between top-[40%] md:px-10 page-content-container`}
    //   >
    //     <div className="w-full">
    //       <Title title={subtitle} variant="largeTitle" />
    //     </div>
    //     <div className="flex gap-4 md:flex-col md:items-end w-full">
    //       <Labels label={label1} />
    //       <Labels label={label2} />
    //     </div>
    //   </div>
    //   <div className="absolute top-[70%] md:top-[80%] lg:hidden page-content-container w-full md:px-10">
    //     <Anchor href="#" title={link} variant="smallArrowLink" />
    //   </div>
    // </Link>
    <article className="mb-20">
      <div className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} w-full h-full relative `}>
        <Image
          src={image}
          alt="default"
          width={400}
          height={400}
          className={` w-full transition-all duration-300 ease-in-out md:h-[500px] lg:h-[700px] object-cover`}
        />
      </div>
      <div
        ref={ref1}
        className={`${
          isVisible ? 'appear-on-scroll durantion-300 delay-150' : 'before-scroll translate-y-4'
        } absolute z-[2] top-1/2 md:top-2/3 page-content-container`}
      >
        <div className="w-full">
          <Title title={subtitle} variant="largeTitle" />
        </div>
      </div>
    </article>
  );
}
