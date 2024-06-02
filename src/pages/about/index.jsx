import Anchor from '@/components/ui/Anchor';
import { fetcher } from '../../../lib/api';
import { useState, useRef } from 'react';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import Link from 'next/link';
import { usePreciseObserver } from '../../../lib/preciseObserver';
import Head from 'next/head';
import Title from '@/components/ui/Title';
import Heading from '@/components/ui/Heading';

// Fetch data at build time
export async function getStaticProps() {
  // Fetch data from the API
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about-page?populate=aboutUs,teamMemberCard.profile,partners.logos,arrowAnchor.icon`
  );
  // Extract the data from the response
  const data = response.data.attributes;
  // Return the data as props
  return {
    props: {
      data: data,
    },
  };
}

export default function About(data) {
  // State for visibility of different sections
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isAboutTitleVisible, setIsAboutTitleVisible] = useState(false);
  const [isPartnersVisible, setIsParagrafVisible] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isTeamCardVisible, setIsTeamCardVisible] = useState(false);

  // Refs for different sections
  const aboutRef = useRef();
  const aboutTitleRef = useRef();
  const partnersRef = useRef();
  const logosRef = useRef();
  const teamRef = useRef();
  const teamCardRef = useRef();

  // Observers to set visibility when sections come into view
  usePreciseObserver(aboutRef, () => setIsAboutVisible(true));
  usePreciseObserver(aboutTitleRef, () => setIsAboutTitleVisible(true));
  usePreciseObserver(partnersRef, () => setIsParagrafVisible(true));
  usePreciseObserver(logosRef, () => setIsLogosVisible(true));
  usePreciseObserver(teamRef, () => setIsTeamVisible(true));
  usePreciseObserver(teamCardRef, () => setIsTeamCardVisible(true));

  return (
    <main className="page-content-container flex flex-col gap-36 bg-off-white">
      {/* Set the page title and description in the head */}
      <Head>
        <title>About FilmGExR - Leading Virtual Production Studio in Scandinavia</title>
        <meta
          name="description"
          content="Discover FilmGExR, a leading virtual production studio. Our innovative team uses advanced technology for immersive filmmaking, shaping the future of entertainment."
          key="desc"
        />
      </Head>

      <article className="flex flex-col gap-12">
        {/* Title of the about section */}
        <div
          ref={aboutTitleRef}
          className={` ${isAboutTitleVisible ? 'appear-on-scroll' : 'before-scroll'} v-space-xl`}
        >
          <Heading title={data.data.title} />
        </div>

        {/* Map over the aboutUs data and display each item with the TitleWithParagraf component */}
        {data.data.aboutUs.map((item, index) => (
          <section key={index}>
            <TitleWithParagraf
              subtitle={item.subtitle}
              paragraf={item.paragraf}
              componentvariant={index % 2 !== 0 ? 'opposite' : ''}
            />
          </section>
        ))}

        {/* Anchor link at the end of the about section */}
        <section
          ref={aboutRef}
          className={`flex gap-2 items-center justify-end ${
            isAboutVisible ? 'appear-on-scroll' : 'before-scroll'
          } md:v-space-xl`}
        >
          <Anchor variant="arrowLink" href={data.data.arrowAnchor.url} title={data.data.arrowAnchor.title} />
          <Image
            src={data.data.arrowAnchor.icon.data.attributes.url}
            alt={data.data.arrowAnchor.icon.data.attributes.alternativeText}
            width={20}
            height={20}
            className="w-6 md:w-10 h-auto"
          />
        </section>
      </article>

      {/* Container for the partners section */}
      <article>
        {/* Title of the partners section */}
        <div ref={partnersRef} className={` ${isPartnersVisible ? 'appear-on-scroll' : 'before-scroll'}`}>
          <Title title={data.data.partnersTitle} variant="subtitle" />
        </div>

        {/* Map over the partners data and display each partner's logo with a link */}
        <section
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
        </section>
      </article>

      {/* Container for the team section */}
      <article>
        {/* Title of the team section */}
        <div ref={teamRef} className={` ${isTeamVisible ? 'appear-on-scroll' : 'before-scroll '}`}>
          <Title title={data.data.teamTitle} variant="pageTitle" />
        </div>

        {/* Map over the teamMemberCard data and display each team member with the TeamCard component */}
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
      </article>
    </main>
  );
}
