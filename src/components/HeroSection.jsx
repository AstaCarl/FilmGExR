import React from 'react';
import Title from './ui/Title';

export default function HeroSection() {
  return (
    <div className="bg-dark h-screen flex flex-col justify-center items-center">
      <Title variant="pageTitle" title="Introducing" />
      <Title variant="heroTitle" title="FilmGExR" />
      <Title variant="heroSubtitle" title="Virtual production studio" />
    </div>
  );
}
