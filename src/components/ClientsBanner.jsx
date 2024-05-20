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
      <div className={` col-span-full lg:col-span-6`}>
        <Title title={clientData.clientsTitle} variant="subtitle" />
        <Paragraf paragrafText={clientData.clientSummary} />
      </div>
      <div className="col-span-full lg:col-span-6 lg:pl-10">
        <div className="tw-grid">
          {clientData.clients &&
            clientData.clients.map((logo, index) => (
              <Image
                key={index}
                src={logo.logos.data.attributes.url}
                alt={logo.logos.data.attributes.alternativeText}
                width={50}
                height={50}
                className="col-span-4 w-16 h-auto lg:w-20 "
              />
            ))}
        </div>
      </div>
    </article>
  );
}
