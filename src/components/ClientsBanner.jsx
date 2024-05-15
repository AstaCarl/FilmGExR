import React from 'react';
import Title from './ui/Title';
import Image from 'next/image';
import Paragraf from './Paragraf';

export default function ClientsBanner({ clientData }) {
  if (!clientData) {
    return null; // or a loading spinner, or some fallback UI
  }

  return (
    <article className="md:tw-grid ">
      <div className={` md:col-span-6 left-content-container space-y-4 `}>
        <Title title={clientData.clientsTitle} variant="subtitle" />
        <Paragraf paragrafText={clientData.clientSummary} />
      </div>
      <div
        className={`hidden md:block col-span-6 
          `}
      >
        <div className="grid grid-cols-12 gap-6 place-items-center right-content-container">
          {clientData.clients &&
            clientData.clients.map((logo, index) => (
              <div className="col-span-4 ">
                <div className="h-24 w-24 flex items-center justify-center">
                  <Image
                    key={index}
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
      <div className={`md:hidden overflow-hidden whitespace-nowrap pt-10 `}>
        <div className="flex min-w-full items-center justify-between gap-20 animate-marquee">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {clientData.clients &&
                clientData.clients.map((logo, index) => (
                  <Image
                    key={index}
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
