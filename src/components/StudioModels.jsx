import React, { useState } from 'react';
import Title from './ui/Title';
import Paragraf from './Paragraf';
import Image from 'next/image';
import testImage from '../../public/assets/test1png.png';
import Anchor from './ui/Anchor';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import StorStudie from '../../public/assets/storstudie.png';
import MellemStudie from '../../public/assets/mellemstudie.png';
import LilleStudie from '../../public/assets/lillestudie.png';

export default function StudioModels({ title, paragraf }) {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  return (
    <div className=" flex flex-col text-end items-end gap-4">
      <div className={` ${isVisible ? 'appear-on-scroll' : 'before-scroll'}`} ref={ref}>
        <Title title={title} variant="pageTitle" />
      </div>

      <Paragraf className="text-lg md:w-2/3" paragrafText={paragraf} />
      <ul className="flex gap-4">
        <li>
          <Anchor variant="nav" href="/studio-models" title="Warehouse" />
        </li>
        <li>
          <Anchor variant="nav" href="/studio-models" title="Studio 1" />
        </li>
        <li>
          <Anchor variant="nav" href="/studio-models" title="Studie 2" />
        </li>
      </ul>
      <div className="relative">
        <Image src={StorStudie} alt="default" width={2000} height={2000} className="w-full relative z-10 opacity-20" />
        <Image src={MellemStudie} alt="default" width={2000} height={2000} className="w-full absolute top-0 " />
        <Image
          src={LilleStudie}
          alt="default"
          width={2000}
          height={2000}
          className="w-full absolute top-0 opacity-20"
        />
      </div>
      {/* <div style={{ position: 'relative', width: '2000px', height: '2000px' }}>
        <img src={StorStudie} alt="default" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }} />
        <img src={MellemStudie} alt="default" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }} />
        <img src={LilleStudie} alt="default" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }} />
      </div> */}
    </div>
  );
}
