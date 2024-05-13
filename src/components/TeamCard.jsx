import React from 'react';
import Image from 'next/image';
import Title from './ui/Title';
import Paragraf from './Paragraf';

export default function TeamCard({ alt, src, title, paragraf }) {
  return (
    <section className="col-span-6 md:col-span-4">
      <div className="flex flex-col items-center text-center gap-4">
        <Image width={300} height={300} alt={alt} src={src} className="rounded-md" />
        <Title title={title} variant="subtitle" />
        <Paragraf paragrafText={paragraf} />
      </div>
    </section>
  );
}
