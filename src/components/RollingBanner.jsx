import React, { useState, useEffect } from 'react';
import Title from './ui/Title';
import Image from 'next/image';
import { useIntersectionObserver } from '../../lib/interSectionObserver';

export default function RollingBanner({ clientData }) {
  const [logos, setLogos] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  useEffect(() => {
    if (clientData && clientData.logos && clientData.logos.data) {
      setLogos(clientData.logos.data);
    }
  }, [clientData]);

  if (!clientData) {
    return <div></div>;
  }

  return (
    <article className=" flex flex-col gap-6">
      <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} page-content-container `}>
        <Title title={clientData.title} variant="subtitle" />
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex min-w-full items-center justify-between gap-20 md:gap-24 lg:gap-28 animate-marquee">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={`http://localhost:1337${logo.attributes.url}`}
                  alt={logo.attributes.alternativeText}
                  width={50}
                  height={50}
                  className="w-auto h-full px-4 "
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
