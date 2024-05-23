import Paragraf from '@/components/Paragraf';
import Title from '@/components/ui/Title';
import Heading from '@/components/ui/Heading';
import React, { useState, useRef } from 'react';
import { fetcher } from '../../lib/api';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';
import { usePreciseObserver } from '../../lib/preciseObserver';
import Head from 'next/head';

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/error-page?populate=arrowAnchor.icon`);
  const data = response.data.attributes;
  return {
    props: {
      data: data,
    },
  };
}

export default function ErrorPage({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-4">
      <Head>
        <title>404 Error - Page Not Found | FilmGExR</title>
        <meta
          name="description"
          content="We're sorry, but the page you're looking for doesn't exist. Please navigate back to our homepage, or use our navigation to find what you need. | FilmGExR"
          key="desc"
        />
      </Head>
      <div>
        <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'}`}>
          <Heading className="text-8xl" title={data.title} />
        </div>
        <div ref={ref} className={`${isVisible ? 'appear-on-scroll delay-150' : 'before-scroll'}`}>
          <Title variant="subtitle" title={data.subtitle} />
        </div>
        <div className="flex gap-2 my-8">
          <Paragraf
            className={`text-lg ${isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'}`}
            paragrafText={data.paragraf}
          />
          {data.arrowAnchor && (
            <div
              ref={ref}
              className={`flex items-center gap-2 ${isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'}`}
            >
              <Anchor
                aria="Go to home page"
                variant="smallArrowLink"
                href={data.arrowAnchor.url}
                title={data.arrowAnchor.title}
              />
              <Image
                src={data.arrowAnchor.icon.data.attributes.url}
                alt={data.arrowAnchor.icon.data.attributes.alternativeText}
                width={28}
                height={28}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
