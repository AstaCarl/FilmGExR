import React, { useState } from 'react';
import Heading from './ui/Heading';
import Paragraf from './ui/Paragraf';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Button from './ui/Button';

export default function StudioModels({ studioData }) {
  // State for visibility
  const [isVisible, setIsVisible] = useState(false);

  // State for showing studio models
  const [showMedium, setShowMedium] = useState(false);
  const [showBig, setShowBig] = useState(true);
  // State for active button
  const [active, setActive] = useState('big');

  // Observer to set visibility
  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  // Function to show medium studio
  const handleShowMedium = () => {
    setShowMedium(true);
    setShowBig(false);
    setActive('medium');
  };

  // Function to show big studio
  const handleShowBig = () => {
    setShowMedium(false);
    setShowBig(true);
    setActive('big');
  };

  return (
    // Studio models section
    <div className="bg-off-white relative flex flex-col -mt-20 gap-4 page-content-container mb-8 md:mb-16 lg:mb-20">
      <div className={` ${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
        {/* <Heading title={studioData.title} /> */}
        <Heading title="Two Ideal Studios" />
      </div>
      <div className="flex w-full gap-4 ">
        <ul className=" w-full gap-4 flex ">
          <li className="w-fit">
            {/* Button component for toggling studio models */}
            <Button
              onClick={handleShowBig}
              variant={`${active === 'big' ? 'active' : ''}`}
              buttonText={studioData.bigStudLink}
              ariaLabel="Show image and description of large studio"
            />
          </li>
          <li className="w-fit">
            <Button
              onClick={handleShowMedium}
              variant={`${active === 'medium' ? 'active' : ''}`}
              buttonText={studioData.smallStudLink}
              ariaLabel="Show image and description of small studio"
            />
          </li>
        </ul>
      </div>
      <div className="relative">
        {/* Paragraf component for studio models each showing depending on the state */}
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
      <div className="relative w-full">
        {/* Image component for studio models each showing depending on the state */}
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
