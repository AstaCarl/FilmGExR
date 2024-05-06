import Paragraf from '@/components/Paragraf';
import Title from '@/components/ui/Title';
import React from 'react';
import { fetcher } from '../../lib/api';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';

export default function ErrorPage({ data }) {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-4">
      <div>
        <Title variant="404" title={data.title} />
        <Paragraf className="text-lg" paragrafText={data.subtitle} />
        <div className="flex gap-2 my-8">
          <Paragraf className="text-lg" paragrafText={data.paragraf} />
          {data.arrowAnchor && (
            <div className="flex items-center gap-2">
              <Anchor variant="smallArrowLink" href={data.arrowAnchor.url} title={data.arrowAnchor.title} />
              <Image
                src={`http://localhost:1337${data.arrowAnchor.icon.data.attributes.url}`}
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

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/error-pages/1?populate=arrowAnchor.icon`);
  const data = response.data.attributes;
  return {
    props: {
      data: data,
    },
  };
}
