import React, { useState, useEffect } from 'react';
import Title from './ui/Title';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';

export default function RollingBanner({ clientData }) {
  const [logos, setLogos] = useState([]);
  console.log('clientData', clientData);

  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  useEffect(() => {
    if (clientData && clientData.logos && clientData.logos.data) {
      setLogos(clientData.logos.data);
    }
  }, [clientData]);

  console.log('logos', logos);

  return (
    <article className=" flex flex-col gap-14">
      <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} page-content-container`}>
        <Title title={clientData.title} variant="pageTitle" />
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex w-screen items-center justify-between gap-10 md:gap-24 lg:gap-28 ">
          {[...Array(1)].map((_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={`http://localhost:1337${logo.attributes.url}`}
                  alt="placeholder"
                  width={1000}
                  height={1000}
                  className="w-auto h-full px-4 lg:w-[150px]"
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
