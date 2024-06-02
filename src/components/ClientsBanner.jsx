import React from 'react';
import Title from './ui/Title';
import Image from 'next/image';
import Paragraf from './ui/Paragraf';

// This is a functional component that renders a banner with client information
// It accepts a 'clientData' prop which is an object containing all the necessary data
export default function ClientsBanner({ clientData }) {
  // If there's no clientData, don't render anything
  if (!clientData) {
    return null;
  }

  return (
    <article className="tw-grid page-content-container space-y-4">
      <div className={` col-span-full lg:col-span-6 space-y-4`}>
        <Title title={clientData.clientsTitle} variant="subtitle" />
        <Paragraf paragrafText={clientData.clientSummary} className="lg:w-[90%]" />
      </div>
      <div className="col-span-full lg:col-span-6 lg:pl-10">
        <div className="tw-grid">
          {clientData.clients &&
            clientData.clients.map((logo, index) => (
              // Each logo is an Image component from Next.js
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
