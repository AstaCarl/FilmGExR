import React, { useState, useRef } from 'react';
import WorkSection from '../../components/WorkSection';
import Title from '../../components/ui/Title';
import { fetcher } from '../../../lib/api';
import { usePreciseObserver } from '../../../lib/preciseObserver';
import Head from 'next/head';

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cases-page?populate=cases.video`);
  const casesData = response.data.attributes;
  return {
    props: {
      casesData: casesData,
    },
  };
}

export default function Cases({ casesData }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

  return (
    <main className="v-space-xl bg-off-white">
      <Head>
        <title>FilmGExR's Recent Work - Virtual Production for Films, Series and commercials</title>
        <meta
          name="description"
          content="Explore FilmGExR's recent work in virtual production for films and series like Carmen Curlers, Oxen, Valdes Jul, and CUT. Witness our innovative approach to filmmaking through these compelling visual narratives."
          key="desc"
        />
      </Head>
      <section>
        <div
          ref={ref}
          className={`page-content-container mb-12 ${isVisible ? 'appear-on-scroll delay-150' : 'before-scroll'}`}
        >
          <Title title={casesData.title} variant="pageTitle" />
        </div>
        {casesData.cases.map((caseItem, index) => {
          return (
            <div className="pb-20" key={index}>
              <WorkSection key={index} subtitle={caseItem.title} video={caseItem.video.data.attributes.url} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
