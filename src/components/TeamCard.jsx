import React from 'react';
import Image from 'next/image';
import Title from './ui/Title';
import Paragraf from './Paragraf';

export default function TeamCard({ alt, src, title, paragraf }) {
  return (
    <section className="col-span-6 md:col-span-4">
      <div className="flex flex-col items-center gap-2">
        <Image width={200} height={200} alt={alt} src={src} />
        <Title title={title} variant="subtitle" />
        <Paragraf paragrafText={paragraf} />
      </div>
    </section>
  );
}
