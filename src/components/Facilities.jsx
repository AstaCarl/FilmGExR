import React from 'react';
import Title from './ui/Title';
import Paragraf from './Paragraf';

export default function Facilities() {
  return (
    <article className=" v-space-xl bg-off-white relative">
      <Title title="The VP stage" variant="pageTitle" />
      <Title title="UNIQUE IN SCANDINAVIA / COPENHAGEN" variant="subtitle" />
      <Paragraf paragrafText="FilmGEAR XR is fitted with state-of-the-art technologies:" />
      <ul className="flex flex-col gap-4 pt-8">
        <li className="flex gap-4 items-center">
          <span className="text-red text-lg w-6">01</span>
          <Paragraf paragrafText="High Contrast LED Panels" />
        </li>
        <li className="flex gap-4 items-center">
          <span className="text-red text-lg w-6">02</span>
          <Paragraf paragrafText="Media Servers and Workstations" />
        </li>
        <li className="flex gap-4 items-center">
          <span className="text-red text-lg w-6">03</span>
          <Paragraf paragrafText="Camera Tracking Systems" />
        </li>
        <li className="flex gap-4 items-center">
          <span className="text-red text-lg w-6">04</span>
          <Paragraf paragrafText="Image Based Lighting" />
        </li>
        <li className="flex gap-4 items-center">
          <span className="text-red text-lg w-6">05</span>
          <Paragraf paragrafText="In-House lighting and grip departments" />
        </li>
        <li className="flex gap-4 items-center">
          <span className="text-red text-lg w-6">06</span>
          <Paragraf paragrafText="And more..." />
        </li>
      </ul>
    </article>
  );
}
