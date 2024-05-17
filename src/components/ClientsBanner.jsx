import React from 'react';
import Title from './ui/Title';
import Image from 'next/image';
import Paragraf from './Paragraf';

export default function ClientsBanner({ clientData }) {
  if (!clientData) {
    return null; // or a loading spinner, or some fallback UI
  }

  return (
    <article className="tw-grid page-content-container space-y-4">
      <div className={` col-span-full `}>
        <Title title={clientData.clientsTitle} variant="subtitle" />
        <Paragraf paragrafText={clientData.clientSummary} />
      </div>

      {clientData.clients &&
        clientData.clients.map((logo, index) => (
          <div key={index} className="col-span-3">
            <Image
              src={logo.logos.data.attributes.url}
              alt={logo.logos.data.attributes.alternativeText}
              width={50}
              height={50}
              className="w-24 h-auto"
            />
          </div>
        ))}
      {/* <div className={`md:hidden overflow-hidden whitespace-nowrap pt-10 `}>
        <div className="flex min-w-full items-center justify-between gap-20 animate-marquee">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {clientData.clients &&
                clientData.clients.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.logos.data.attributes.url}
                    alt={logo.logos.data.attributes.alternativeText}
                    width={50}
                    height={50}
                    className="w-auto h-16"
                  />
                ))}
            </React.Fragment>
          ))}
        </div>
      </div> */}
    </article>
  );
}
