import Heading from '@/components/ui/Heading';
import Anchor from '@/components/ui/Anchor';
import { fetcher } from '../../../lib/api';
import React, { useState, useRef } from 'react';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import Link from 'next/link';
import { usePreciseObserver } from '../../../lib/preciseObserver';
import Head from 'next/head';
import Title from '@/components/ui/Title';

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about-page?populate=aboutUs,teamMemberCard.profile,partners.logos,arrowAnchor.icon`
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
  const [isAboutTitleVisible, setIsAboutTitleVisible] = useState(false);
  const [isPartnersVisible, setIsParagrafVisible] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isTeamCardVisible, setIsTeamCardVisible] = useState(false);
  const aboutRef = useRef();
  const aboutTitleRef = useRef();
  const partnersRef = useRef();
  const logosRef = useRef();
  const teamRef = useRef();
  const teamCardRef = useRef();

  usePreciseObserver(aboutRef, () => {
    setIsAboutVisible(true);
  });
  usePreciseObserver(aboutTitleRef, () => {
    setIsAboutTitleVisible(true);
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
    <article className="page-content-container flex flex-col gap-36 bg-off-white">
      <Head>
        <title>About FilmGExR - Leading Virtual Production Studio in Scandinavia</title>
        <meta
          name="description"
          content="Learn about FilmGExR, a pioneering virtual production studio offering comprehensive services for filmmakers. Our innovative team utilizes cutting-edge technology to create immersive experiences, pushing the boundaries of traditional filmmaking. Discover how we're shaping the future of entertainment"
          key="desc"
        />
      </Head>
      <div className="flex flex-col gap-12">
        <div
          ref={aboutTitleRef}
          className={` ${isAboutTitleVisible ? 'appear-on-scroll' : 'before-scroll'} v-space-xl`}
        >
          <Heading title={data.data.title} />
        </div>
        {data.data.aboutUs.map((item, index) => (
          <div key={index}>
            <TitleWithParagraf
              variant="subtitle"
              title={item.subtitle}
              paragraf={item.paragraf}
              componentvariant={index % 2 !== 0 ? 'opposite' : ''}
            />
          </div>
        ))}
        <div
          ref={aboutRef}
          className={`flex gap-2 items-center justify-end ${
            isAboutVisible ? 'appear-on-scroll' : 'before-scroll'
          } v-space-xl`}
        >
          <Anchor variant="arrowLink" href={data.data.arrowAnchor.url} title={data.data.arrowAnchor.title} />
          <Image
            src={data.data.arrowAnchor.icon.data.attributes.url}
            alt={data.data.arrowAnchor.icon.data.attributes.alternativeText}
            width={20}
            height={20}
            className="w-6 md:w-10 h-auto"
          />
        </div>
      </div>

      <div>
        <div ref={partnersRef} className={` ${isPartnersVisible ? 'appear-on-scroll' : 'before-scroll'}`}>
          <Title title={data.data.partnersTitle} variant="subtitle" />
        </div>
        <div
          ref={logosRef}
          className={`${isLogosVisible ? 'appear-on-scroll delay-150' : 'before-scroll '} flex gap-1 md:gap-16`}
        >
          {data.data.partners.map((item, index) => (
            <Link key={index} href={item.url} target="_blank">
              <Image
                key={index}
                width={150}
                height={150}
                alt={item.logos.data.attributes.alternativeText}
                src={item.logos.data.attributes.url}
                className="w-auto h-auto"
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div ref={teamRef} className={` ${isTeamVisible ? 'appear-on-scroll' : 'before-scroll '}`}>
          <Title title={data.data.teamTitle} variant="pageTitle" />
        </div>
        <section
          ref={teamCardRef}
          className={`tw-grid ${isTeamCardVisible ? 'appear-on-scroll ' : 'before-scroll translate-y-4'}`}
        >
          {data.data.teamMemberCard.map((item, index) => (
            <div key={index} className="col-span-6 md:col-span-4">
              <TeamCard
                title={item.title}
                src={item.profile.data.attributes.url}
                paragraf={item.subtitle}
                alt={item.profile.data.attributes.alternativeText}
              />
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}
