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
  console.log(clientData);

  return (
    <article className="md:tw-grid ">
      <div
        ref={ref}
        className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} md:col-span-6 page-content-container`}
      >
        <Title title={clientData.clientsTitle} variant="subtitle" />
        <p className="md:pt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fugit temporibus quo nisi, accusantium quia,
          saepe quidem esse vel ipsam labore laborum iure. Eius id quidem temporibus excepturi. Ipsam animi iusto magni,
          placeat
        </p>
      </div>
      <div className="hidden md:block col-span-6 page-content-container ">
        <div className="grid grid-cols-12 gap-6 place-items-center">
          {clientData.clients.map((logo) => (
            <div className="col-span-4 ">
              <div className="h-24 w-24 flex items-center justify-center">
                <Image
                  key={logo.id}
                  src={`http://localhost:1337${logo.logos.data.attributes.url}`}
                  alt={logo.logos.data.attributes.alternativeText}
                  width={50}
                  height={50}
                  className="w-20 lg:w-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden overflow-hidden whitespace-nowrap pt-10">
        <div className="flex min-w-full items-center justify-between gap-20 animate-marquee">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {clientData.clients.map((logo) => (
                <Image
                  key={logo.id}
                  src={`http://localhost:1337${logo.logos.data.attributes.url}`}
                  alt={logo.logos.data.attributes.alternativeText}
                  width={50}
                  height={50}
                  className="w-auto h-16"
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
