import Paragraf from '@/components/Paragraf';
import Title from '@/components/ui/Title';
import React, { useEffect, useState } from 'react';
import { fetcher } from '../../../lib/api';
import Arrow from '../../../public/assets/arrow-down-solid.svg';
import Image from 'next/image';

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/the-processes?populate=*`);
  const data = response.data;
  return {
    props: {
      data: data,
    },
  };
}

export default function Theprocess({ data }) {
  const [stepsData, setStepsData] = useState([]);
  const [showParagrafId, setShowParagrafId] = useState(null);

  useEffect(() => {
    setStepsData(data);
    [data];
  });

  const handleShowParagraf = (id) => () => {
    if (showParagrafId !== id) {
      setShowParagrafId(id);
      console.log('showParagrafId', showParagrafId);
    } else {
      setShowParagrafId(null);
      console.log('showParagrafId null', showParagrafId);
    }
  };

  return (
    <div className=" bg-off-white py-36 flex">
      <article className="tw-grid">
        <div className="col-span-full ">
          <div className="page-content-container">
            <Title title="Just five steps" variant="pageTitle" />
          </div>
          <section className="v-space-lg">
            {stepsData.map((item, index) => (
              <div
                key={item.id}
                style={{ borderBottom: index === stepsData.length - 1 ? '1px solid rgba(244, 1, 59, 0.2)' : 'none' }}
              >
                <div className="tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20  page-content-container justify-between gap-10 items-center">
                  <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[3rem] font-poppins">
                    0{item.attributes.steps.id}
                  </span>
                  <div className="col-span-8">
                    <Title variant="subtitle" title={item.attributes.steps.subtitle} />
                  </div>
                  <div className="col-span-2 col-start-12 lg:col-span-1 lg:col-start-11">
                    <button
                      className={`${
                        showParagrafId === item.attributes.steps.id
                          ? 'rotate-180 transition duration-1000 ease-in-out hover:pt-4'
                          : 'rotate-0 transition-all duration-1000 ease-in-out'
                      } hover:pt-2 `}
                      onClick={handleShowParagraf(item.attributes.steps.id)}
                    >
                      <Image src={Arrow} alt="" width={20} height={20} className="w-6" />
                    </button>
                  </div>
                </div>
                <div className="page-content-container  ">
                  <div className="tw-grid ">
                    <Paragraf
                      className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                        showParagrafId === item.attributes.steps.id ? 'pt-6 h-[300px]' : ' h-0'
                      }`}
                      paragrafText={item.attributes.steps.paragraf}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </article>
    </div>
  );
}
