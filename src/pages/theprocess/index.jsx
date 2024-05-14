import Paragraf from '@/components/Paragraf';
import Title from '@/components/ui/Title';
import React, { useState } from 'react';
import { fetcher } from '../../../lib/api';
import { useIntersectionObserver } from '../../../lib/interSectionObserver';

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/the-process?populate=*`);
  const data = response.data;
  return {
    props: {
      data: data,
    },
  };
}

export default function Theprocess({ data }) {
  const [showParagrafId, setShowParagrafId] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  const handleShowParagraf = (id) => () => {
    if (showParagrafId.includes(id)) {
      setShowParagrafId(showParagrafId.filter((item) => item !== id));
    } else {
      setShowParagrafId([...showParagrafId, id]);
    }
  };

  return (
    <div className=" bg-off-white v-space-xl flex">
      <article className="tw-grid">
        <div className="col-span-full ">
          <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} page-content-container`}>
            <Title title={data.attributes.title} variant="pageTitle" />
            <Title title={data.attributes.subtitle} variant="subtitle" />
          </div>
          <section className="v-space-lg">
            {data.attributes.steps.map((item, index) => (
              <div
                key={item.id}
                style={{
                  borderBottom: index === data.attributes.steps.length - 1 ? '1px solid rgba(244, 1, 59, 0.2)' : 'none',
                }}
              >
                <div
                  ref={ref}
                  className={`tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20  page-content-container justify-between gap-10 items-center ${
                    isVisible ? 'appear-on-scroll delay-150' : 'before-scroll'
                  }`}
                >
                  <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[2.5rem] font-poppins">
                    0{item.number}
                  </span>
                  <div className="col-span-8">
                    <Title variant="subtitle" title={item.subtitle} />
                  </div>
                  <div className="col-span-2 col-start-12 lg:col-span-1 lg:col-start-11">
                    <button
                      className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
                      onClick={handleShowParagraf(item.id)}
                      aria-label="Show or hide steps"
                    >
                      <div className="w-6 h-[2px] bg-red rounded-full"></div>
                      <div
                        className={`${
                          showParagrafId.includes(item.id) ? 'rotate-0' : ' rotate-90 '
                        } absolute bottom-2.5 bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
                      ></div>
                    </button>
                  </div>
                </div>
                <div className="page-content-container  ">
                  <div className="tw-grid ">
                    <Paragraf
                      className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                        showParagrafId.includes(item.id) ? 'pt-6 h-[300px]' : ' h-0'
                      }`}
                      paragrafText={item.paragraf}
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
