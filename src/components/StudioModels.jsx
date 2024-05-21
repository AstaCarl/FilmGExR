import React, { useState } from 'react';
import Heading from './ui/Heading';
import Paragraf from './Paragraf';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Button from './ui/Button';

export default function StudioModels({ studioData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showMedium, setShowMedium] = useState(false);
  const [showBig, setShowBig] = useState(true);
  const [active, setActive] = useState('big');

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  const handleShowMedium = () => {
    setShowMedium(true);
    setShowBig(false);
    setActive('medium');
  };

  const handleShowBig = () => {
    setShowMedium(false);
    setShowBig(true);
    setActive('big');
  };

  return (
    <div className="bg-off-white relative flex flex-col -mt-20 gap-4 page-content-container mb-8 md:mb-16 lg:mb-20">
      <div className={` ${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
        <Heading title={studioData.title} />
      </div>
      <div className="relative">
        <Paragraf
          className={`text-md relative lg:max-w-[60%] transition-opacity duration-500 ease-in-out ${
            showBig ? 'opacity-100 ' : 'opacity-0 '
          }`}
          paragrafText={studioData.bigStudText}
        />
        <Paragraf
          className={`text-md absolute lg:max-w-[60%] top-0 transition-opacity duration-500 ease-in-out ${
            showMedium ? 'opacity-100' : 'opacity-0'
          }`}
          paragrafText={studioData.smallStudText}
        />
      </div>
      <ul className="flex w-full gap-4 ">
        <div className=" w-full gap-4 flex ">
          <li className="w-fit">
            <Button
              onClick={handleShowBig}
              variant={`${active === 'big' ? 'active' : ''}`}
              buttonText={studioData.bigStudLink}
            />
          </li>
          <li className="w-fit">
            <Button
              onClick={handleShowMedium}
              variant={`${active === 'medium' ? 'active' : ''}`}
              buttonText={studioData.smallStudLink}
            />
          </li>
        </div>
      </ul>
      <div className="relative w-full">
        <Image
          src={studioData.studios.data[0].attributes.url}
          alt="default"
          width={2000}
          height={2000}
          className={`${
            showBig ? 'opacity-100 ' : 'opacity-0  '
          } w-full opacity-0 transition-opacity duration-500 ease-in-out relative`}
        />
        <Image
          src={studioData.studios.data[1].attributes.url}
          alt="default"
          width={4000}
          height={4000}
          className={`${
            showMedium ? 'opacity-100 ' : 'opacity-0'
          } w-full opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 `}
        />
      </div>
    </div>
  );
}
