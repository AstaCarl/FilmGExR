import Paragraf from '@/components/ui/Paragraf';
import Heading from '@/components/ui/Heading';
import Title from '@/components/ui/Title';
import React, { useState, useRef, useEffect } from 'react';
import { fetcher } from '../../../lib/api';
import { usePreciseObserver } from '../../../lib/preciseObserver';
import { Link } from 'react-scroll';
import Head from 'next/head';

// Fetch data at build time
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
  // State for visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  // State for visibility of the paragrafs
  const [showParagraf1, setShowParagraf1] = useState(false);
  const [showParagraf2, setShowParagraf2] = useState(false);
  const [showParagraf3, setShowParagraf3] = useState(false);
  const [showParagraf4, setShowParagraf4] = useState(false);
  const [showParagraf5, setShowParagraf5] = useState(false);

  // Reference to the component
  const ref = useRef();
  // Observer to set visibility of the component
  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

  // Handlers to toggle visibility of a paragraph
  const handleShowParagraf1 = () => {
    setShowParagraf1(!showParagraf1);
  };
  const handleShowParagraf2 = () => {
    setShowParagraf2(!showParagraf2);
  };
  const handleShowParagraf3 = () => {
    setShowParagraf3(!showParagraf3);
  };
  const handleShowParagraf4 = () => {
    setShowParagraf4(!showParagraf4);
  };

  const handleShowParagraf5 = () => {
    setShowParagraf5(!showParagraf5);
  };

  return (
    <main className="bg-off-white v-space-xl flex">
      <Head>
        <title>Virtual Production Process in 5 Steps | FilmGExR</title>
        <meta
          name="description"
          content="Discover FilmGExR's five-step virtual production process. We offer a tailored approach from consultation to shooting day, ensuring high-quality content creation."
          key="desc"
        />
      </Head>

      <article className="tw-grid">
        <div className="col-span-full">
          {/* Main Title */}
          <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} page-content-container`}>
            <Heading title={data.attributes.title} />
          </div>

          {/* Subtitle */}
          <div className={`${isVisible ? 'appear-on-scroll delay-150' : 'before-scroll'} page-content-container`}>
            <Title title={data.attributes.subtitle} variant="subtitle" />
          </div>

          {/* Steps Section */}
          <div
            ref={ref}
            className={`v-space-lg ${
              isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
            } border-b-2 border-red border-opacity-20`}
          >
            {/* Step 1 */}
            <section>
              <div className="tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20 page-content-container justify-between gap-10 items-center">
                <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[2.5rem] font-poppins">
                  0{data.attributes.step1.number}
                </span>
                <div className="col-span-8">
                  <Title variant="subtitle" title={data.attributes.step1.subtitle} />
                </div>
                <Link
                  smooth={true}
                  to="paragraf1"
                  offset={-200}
                  className="cursor-pointer relative h-10 w-10 transition-transform duration-500 ease-in-out col-span-2 col-start-12 lg:col-span-1 lg:col-start-11"
                  onClick={handleShowParagraf1}
                  aria-label="Show or hide steps"
                >
                  <div className="w-6 h-[2px] bg-red rounded-full relative top-1/2"></div>
                  <div
                    className={`${
                      showParagraf1 ? 'rotate-0' : 'rotate-90'
                    } absolute bottom-[18px] bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
                  ></div>
                </Link>
              </div>

              <div className="page-content-container">
                <div className="tw-grid">
                  <Paragraf
                    id="paragraf1"
                    className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                      showParagraf1 ? 'pt-4 h-[350px] md:h-[260px] md:pt-0 lg:h-[250px]' : 'h-0'
                    }`}
                    paragrafText={data.attributes.step1.paragraf}
                  />
                </div>
              </div>
            </section>

            {/* Repeat similar structure for Steps 2-5 */}
            {/* Step 2 */}
            <section>
              <div className="tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20 page-content-container justify-between gap-10 items-center">
                <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[2.5rem] font-poppins">
                  0{data.attributes.step2.number}
                </span>
                <div className="col-span-8">
                  <Title variant="subtitle" title={data.attributes.step2.subtitle} />
                </div>
                <Link
                  smooth={true}
                  to="paragraf2"
                  offset={-200}
                  className="cursor-pointer relative h-10 w-10 transition-transform duration-500 ease-in-out col-span-2 col-start-12 lg:col-span-1 lg:col-start-11"
                  onClick={handleShowParagraf2}
                  aria-label="Show or hide steps"
                >
                  <div className="w-6 h-[2px] bg-red rounded-full relative top-1/2"></div>
                  <div
                    className={`${
                      showParagraf2 ? 'rotate-0' : 'rotate-90'
                    } absolute bottom-[18px] bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
                  ></div>
                </Link>
              </div>

              <div className="page-content-container">
                <div className="tw-grid">
                  <Paragraf
                    id="paragraf2"
                    className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                      showParagraf2 ? 'pt-4 h-[400px] md:h-[300px] md:pt-0 lg:h-[250px]' : 'h-0'
                    }`}
                    paragrafText={data.attributes.step2.paragraf}
                  />
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section>
              <div className="tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20 page-content-container justify-between gap-10 items-center">
                <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[2.5rem] font-poppins">
                  0{data.attributes.step3.number}
                </span>
                <div className="col-span-8">
                  <Title variant="subtitle" title={data.attributes.step3.subtitle} />
                </div>
                <Link
                  smooth={true}
                  to="paragraf3"
                  offset={-200}
                  className="cursor-pointer relative h-10 w-10 transition-transform duration-500 ease-in-out col-span-2 col-start-12 lg:col-span-1 lg:col-start-11"
                  onClick={handleShowParagraf3}
                  aria-label="Show or hide steps"
                >
                  <div className="w-6 h-[2px] bg-red rounded-full relative top-1/2"></div>
                  <div
                    className={`${
                      showParagraf3 ? 'rotate-0' : 'rotate-90'
                    } absolute bottom-[18px] bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
                  ></div>
                </Link>
              </div>

              <div className="page-content-container">
                <div className="tw-grid">
                  <Paragraf
                    id="paragraf3"
                    className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                      showParagraf3 ? 'pt-4 h-[500px] md:h-[390px] md:pt-0 lg:h-[250px]' : 'h-0'
                    }`}
                    paragrafText={data.attributes.step3.paragraf}
                  />
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section>
              <div className="tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20 page-content-container justify-between gap-10 items-center">
                <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[2.5rem] font-poppins">
                  0{data.attributes.step4.number}
                </span>
                <div className="col-span-8">
                  <Title variant="subtitle" title={data.attributes.step4.subtitle} />
                </div>
                <Link
                  smooth={true}
                  to="paragraf4"
                  offset={-200}
                  className="cursor-pointer relative h-10 w-10 transition-transform duration-500 ease-in-out col-span-2 col-start-12 lg:col-span-1 lg:col-start-11"
                  onClick={handleShowParagraf4}
                  aria-label="Show or hide steps"
                >
                  <div className="w-6 h-[2px] bg-red rounded-full relative top-1/2"></div>
                  <div
                    className={`${
                      showParagraf4 ? 'rotate-0' : 'rotate-90'
                    } absolute bottom-[18px] bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
                  ></div>
                </Link>
              </div>

              <div className="page-content-container">
                <div className="tw-grid">
                  <Paragraf
                    id="paragraf4"
                    className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                      showParagraf4 ? 'pt-4 h-[340px] md:h-[240px] md:pt-0 lg:h-[250px]' : 'h-0'
                    }`}
                    paragrafText={data.attributes.step4.paragraf}
                  />
                </div>
              </div>
            </section>

            {/* Step 5 */}
            <section>
              <div className="tw-grid border-t-2 h-[120px] transition-all ease-in duration-300 border-red border-opacity-20 page-content-container justify-between gap-10 items-center">
                <span className="text-red col-span-2 lg:col-span-1 lg:col-start-2 text-xl md:text-[2rem] lg:text-[2.5rem] font-poppins">
                  0{data.attributes.step5.number}
                </span>
                <div className="col-span-8">
                  <Title variant="subtitle" title={data.attributes.step5.subtitle} />
                </div>
                <Link
                  smooth={true}
                  to="paragraf5"
                  offset={-200}
                  className="cursor-pointer relative h-10 w-10 transition-transform duration-500 ease-in-out col-span-2 col-start-12 lg:col-span-1 lg:col-start-11"
                  onClick={handleShowParagraf5}
                  aria-label="Show or hide steps"
                >
                  <div className="w-6 h-[2px] bg-red rounded-full relative top-1/2"></div>
                  <div
                    className={`${
                      showParagraf5 ? 'rotate-0' : 'rotate-90'
                    } absolute bottom-[18px] bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
                  ></div>
                </Link>
              </div>

              <div className="page-content-container">
                <div className="tw-grid">
                  <Paragraf
                    id="paragraf5"
                    className={`transition-all duration-300 ease-in overflow-hidden col-span-full md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 ${
                      showParagraf5 ? 'pt-4 h-[310px] md:h-[240px] md:pt-0 lg:h-[250px]' : 'h-0'
                    }`}
                    paragrafText={data.attributes.step5.paragraf}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
