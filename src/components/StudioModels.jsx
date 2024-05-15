import React, { useState } from 'react';
import Title from './ui/Title';
import Paragraf from './Paragraf';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import StorStudie from '../../public/assets/bigstud-test(2).png';
import MellemStudie from '../../public/assets/mellemstud_center-test(1).png';
import Button from './ui/Button';

export default function StudioModels({ title, paragraf }) {
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
    <div className=" flex flex-col gap-4 py-36 page-content-container">
      <div className={` ${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
        <Title title={title} variant="pageTitle" />
      </div>

      <Paragraf className="text-lg md:w-2/3" paragrafText={paragraf} />
      <ul className="flex w-full gap-4 relative">
        <div className="absolute w-full gap-4 flex right-0 top-0 z-30 lg:top-8">
          <li className="w-fit">
            <Button onClick={handleShowBig} variant={`${active === 'big' ? 'active' : ''}`} buttonText="Studio 1250" />
          </li>
          <li className="w-fit">
            <Button
              onClick={handleShowMedium}
              variant={`${active === 'medium' ? 'active' : ''}`}
              buttonText="Studio 550"
            />
          </li>
        </div>
      </ul>
      <div className="relative w-full">
        <Image
          src={StorStudie}
          alt="default"
          width={2000}
          height={2000}
          className={`${
            showBig ? 'opacity-100 ' : 'opacity-0 '
          } w-full opacity-0 transition-opacity duration-500 ease-in-out relative`}
        />
        <Image
          src={MellemStudie}
          alt="default"
          width={4000}
          height={4000}
          className={`${
            showMedium ? 'opacity-100 ' : 'opacity-0 '
          } w-full opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 `}
        />
      </div>
    </div>
  );
}
