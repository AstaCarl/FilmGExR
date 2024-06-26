// Import necessary libraries and components
import React, { useState, useRef } from 'react';
import WorkSection from '../../components/WorkSection';
import Heading from '../../components/ui/Heading';
import { fetcher } from '../../../lib/api';
import { usePreciseObserver } from '../../../lib/preciseObserver';
import Head from 'next/head';

// Fetch data at build time
export async function getStaticProps() {
  // Fetch data from the API
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cases-page?populate=cases.video`);
  // Extract the data from the response
  const casesData = response.data.attributes;
  // Return the data as props
  return {
    props: {
      casesData: casesData,
    },
  };
}

// Cases component
export default function Cases({ casesData }) {
  // State and ref for visibility
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Observer to set visibility
  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

  return (
    <main className="v-space-xl bg-off-white">
      {/* Set the page title and description in the head */}
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
        {casesData.cases.map((caseItem, index) => (
          //worksection component for each case
          <article className="pb-20" key={index}>
            <WorkSection subtitle={caseItem.title} video={caseItem.video.data.attributes.url} />
          </article>
        ))}
      </section>
    </main>
  );
}
