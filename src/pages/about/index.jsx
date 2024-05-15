import Title from '@/components/ui/Title';
import { fetcher } from '../../../lib/api';
import React from 'react';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import TeamCard from '@/components/TeamCard';
import Image from 'next/image';
import Link from 'next/link';

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
  console.log('data', data);
  return (
    <article className="page-content-container v-space-xl bg-off-white">
      <div className="pb-14">
        <Title title={data.data.title} variant="pageTitle" />
      </div>
      {data.data.aboutUs.map((item, index) => (
        <div key={index} className="pb-14">
          <TitleWithParagraf
            variant="subtitle"
            title={item.subtitle}
            paragraf={item.paragraf}
            componentvariant={index % 2 !== 0 ? 'opposite' : ''}
          />
        </div>
      ))}
      <Title title={data.data.partnersTitle} variant="pageTitle" />
      <div className="flex v-space-sm">
        {data.data.partners.map((item, index) => (
          <Link href={item.url} target="_blank">
            <Image
              key={index}
              width={200}
              height={200}
              alt={item.logos.data.attributes.alternativeText}
              src={`http://localhost:1337${item.logos.data.attributes.url}`}
            />
          </Link>
        ))}
      </div>
      <div className="v-space-xl">
        <Title title={data.data.teamTitle} variant="pageTitle" />
      </div>
      <section className="tw-grid v-space-sm">
        {data.data.teamMemberCard.map((item, index) => (
          <TeamCard
            key={index}
            title={item.title}
            src={`http://localhost:1337${item.profile.data.attributes.url}`}
            paragraf={item.subtitle}
            alt="Teammeber"
          />
        ))}
      </section>
    </article>
  );
}
