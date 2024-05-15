import React, { useState } from 'react';
import Title from './ui/Title';
import Paragraf from './Paragraf';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Button from './ui/Button';

export default function StudioModels({ title, paragraf, studioData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showMedium, setShowMedium] = useState(false);
  const [showBig, setShowBig] = useState(true);
  const [active, setActive] = useState('big');
  console.log('studioData', studioData);

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
    <div className=" flex flex-col gap-4 py-36 page-content-container">
      <div className={` ${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
        <Title title={studioData.title} variant="pageTitle" />
      </div>
      {showBig && (
        <Paragraf
          className={`${
            showBig ? 'opacity-100 ' : 'opacity-0 '
          } transition-opacity duration-1000 ease-in-out text-md h-24`}
          paragrafText={studioData.bigStudText}
        />
      )}
      {showMedium && (
        <Paragraf
          className={`text-md h-24 ${
            showMedium ? 'opacity-100 ' : 'opacity-0 '
          } transition-opacity duration-1000 ease-in-out`}
          paragrafText={studioData.smallStudText}
        />
      )}
      <ul className="flex w-full gap-4">
        <div className=" w-full gap-4 flex">
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
          src={`http://localhost:1337${studioData.studios.data[0].attributes.url}`}
          alt="default"
          width={2000}
          height={2000}
          className={`${
            showBig ? 'opacity-100 ' : 'opacity-0  '
          } w-full opacity-0 transition-opacity duration-1000 ease-in-out relative`}
        />
        <Image
          src={`http://localhost:1337${studioData.studios.data[1].attributes.url}`}
          alt="default"
          width={4000}
          height={4000}
          className={`${
            showMedium ? 'opacity-100 ' : 'opacity-0'
          } w-full opacity-0 transition-opacity duration-1000 ease-in-out absolute top-0 `}
        />
      </div>
    </div>
  );
}
