import Title from '@/components/ui/Title';
import { fetcher } from '../../../lib/api';
import React, { useState, useRef } from 'react';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import Link from 'next/link';
import { usePreciseObserver } from '../../../lib/preciseObserver';

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about-page?populate=aboutUs,teamMemberCard.profile,partners.logos`
  );
  console.log('response', response);
  const data = response.data.attributes;
  return {
    props: {
      data: data,
    },
  };
}

export default function About(data) {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isPartnersVisible, setIsParagrafVisible] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isTeamCardVisible, setIsTeamCardVisible] = useState(false);
  const aboutRef = useRef();
  const partnersRef = useRef();
  const logosRef = useRef();
  const teamRef = useRef();
  const teamCardRef = useRef();

  usePreciseObserver(aboutRef, () => {
    setIsAboutVisible(true);
  });

  usePreciseObserver(partnersRef, () => {
    setIsParagrafVisible(true);
  });
  usePreciseObserver(logosRef, () => {
    setIsLogosVisible(true);
  });
  usePreciseObserver(teamRef, () => {
    setIsTeamVisible(true);
  });
  usePreciseObserver(teamCardRef, () => {
    setIsTeamCardVisible(true);
  });

  return (
    <article className="page-content-container v-space-xl bg-off-white">
      <div ref={aboutRef} className={`pb-14 ${isAboutVisible ? 'appear-on-scroll' : 'before-scroll'}`}>
        <Title title={data.data.title} variant="pageTitle" />
      </div>
      {data.data.aboutUs.map((item, index) => (
        <div key={index} className={`pb-14 `}>
          <TitleWithParagraf
            variant="subtitle"
            title={item.subtitle}
            paragraf={item.paragraf}
            componentvariant={index % 2 !== 0 ? 'opposite' : ''}
          />
        </div>
      ))}
      <div ref={partnersRef} className={` ${isPartnersVisible ? 'appear-on-scroll' : 'before-scroll'} v-space-lg`}>
        <Title title={data.data.partnersTitle} variant="pageTitle" />
      </div>
      <div
        ref={logosRef}
        className={`${isLogosVisible ? 'appear-on-scroll delay-150' : 'before-scroll '} flex v-space-sm  `}
      >
        {data.data.partners.map((item, index) => (
          <Link key={index} href={item.url} target="_blank">
            <Image
              key={index}
              width={200}
              height={200}
              alt={item.logos.data.attributes.alternativeText}
              src={`http://localhost:1337${item.logos.data.attributes.url}`}
              className="w-auto h-auto"
            />
          </Link>
        ))}
      </div>
      <div ref={teamRef} className={`v-space-xl ${isTeamVisible ? 'appear-on-scroll' : 'before-scroll '}`}>
        <Title title={data.data.teamTitle} variant="pageTitle" />
      </div>
      <section className="tw-grid v-space-sm">
        {data.data.teamMemberCard.map((item, index) => (
          <div
            key={index}
            ref={teamCardRef}
            className={` ${isTeamCardVisible ? 'appear-on-scroll ' : 'before-scroll translate-y-4'} 
            delay-${index * 150} col-span-6 md:col-span-4`}
          >
            <TeamCard
              title={item.title}
              src={`http://localhost:1337${item.profile.data.attributes.url}`}
              paragraf={item.subtitle}
              alt={item.profile.data.attributes.alternativeText}
            />
          </div>
        ))}
      </section>
    </article>
  );
}
