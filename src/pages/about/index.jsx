import Title from '@/components/ui/Title';
import { fetcher } from '../../../lib/api';
import Image from 'next/image';
import React from 'react';
import defaultImage from '../../../public/assets/default.png';
import teamImage from '../../../public/assets/teamMember.png';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import TeamCard from '@/components/TeamCard';

export async function getStaticProps() {
  // const response = await fetcher(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/home-pages/1?populate=introduction.arrowAnchor.icon`
  // );
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/about-page?populate=aboutUs`);
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
        <Title title={data.data.subtitle} variant="subtitle" />
      </div>
      {data.data.aboutUs.map((item, index) => (
        <div className="pb-14">
          <TitleWithParagraf
            variant="subtitle"
            title={item.subtitle}
            paragraf={item.paragraf}
            componentvariant={index % 2 !== 0 ? 'opposite' : ''}
          />
        </div>
      ))}
      <Title title="Meet the Team" variant="pageTitle" />
      <section className="tw-grid">
        <TeamCard title="Our Team" src={teamImage} paragraf="roles...." alt="Teammeber" />
        <TeamCard title="Our Team" src={teamImage} paragraf="roles...." alt="Teammeber" />
        <TeamCard title="Our Team" src={teamImage} paragraf="roles...." alt="Teammeber" />
      </section>
    </article>
  );
}
