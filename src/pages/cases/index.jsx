import React, { useState, useRef } from 'react';
import WorkSection from '../../components/WorkSection';
import Heading from '../../components/ui/Heading';
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
        <title>FilmGExR's Recent Work - Virtual Production Showcase</title>
        <meta
          name="description"
          content="View FilmGExR's recent virtual production work for films and series including Carmen Curlers, Oxen, Valdes Jul, and CUT. Experience our innovative filmmaking."
          key="desc"
        />
      </Head>
      <section>
        <div
          ref={ref}
          className={`page-content-container mb-12 ${isVisible ? 'appear-on-scroll delay-150' : 'before-scroll'}`}
        >
          <Heading title={casesData.title} />
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
