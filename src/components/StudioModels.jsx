import React, { useState } from 'react';
import Title from './ui/Title';
import Paragraf from './Paragraf';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import StorStudie from '../../public/assets/Bigstud-test.png';
import MellemStudie from '../../public/assets/mediumstud-test.png';
import LilleStudie from '../../public/assets/tinystud-test.png';
import Hallway from '../../public/assets/hallways-test.png';
import Button from './ui/Button';

export default function StudioModels({ title, paragraf }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTiny, setShowTiny] = useState(false);
  const [showMedium, setShowMedium] = useState(false);
  const [showBig, setShowBig] = useState(true);
  const [active, setActive] = useState('big');

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  const handleShowTiny = () => {
    setShowTiny(true);
    setShowMedium(false);
    setShowBig(false);
    setActive('tiny');
  };
  const handleShowMedium = () => {
    setShowTiny(false);
    setShowMedium(true);
    setShowBig(false);
    setActive('medium');
  };

  const handleShowBig = () => {
    setShowTiny(false);
    setShowMedium(false);
    setShowBig(true);
    setActive('big');
  };

  return (
    <div className=" flex flex-col text-end items-end gap-4">
      <div className={` ${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
        <Title title={title} variant="pageTitle" />
      </div>

      <Paragraf className="text-lg md:w-2/3" paragrafText={paragraf} />
      <ul className="flex w-full gap-4 relative">
        <div className="absolute justify-end  w-full gap-4 flex right-0 top-0 z-30 lg:top-8">
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
          <li className="w-fit">
            <Button onClick={handleShowTiny} variant={`${active === 'tiny' ? 'active' : ''}`} buttonText="Studio TBA" />
          </li>
        </div>
      </ul>
      <div className="relative">
        <Image src={Hallway} alt="default" width={2000} height={2000} className="w-full z-20 absolute drop-shadow-xl" />

        <Image
          src={StorStudie}
          alt="default"
          width={2000}
          height={2000}
          className={`${
            showBig ? 'opacity-100 ' : 'opacity-0 '
          } w-full opacity-0 transition-opacity duration-500 ease-in-out relative `}
        />
        <Image
          src={MellemStudie}
          alt="default"
          width={2000}
          height={2000}
          className={`${
            showMedium ? 'opacity-100 ' : 'opacity-0 '
          } w-full opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 `}
        />
        <Image
          src={LilleStudie}
          alt="default"
          width={2000}
          height={2000}
          className={`${
            showTiny ? 'opacity-100 ' : 'opacity-0'
          } w-full opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 `}
        />
      </div>
    </div>
  );
}
