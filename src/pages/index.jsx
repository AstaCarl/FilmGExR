import Loader from '@/components/Loader';
import { fetcher } from '../../lib/api';
import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import StudioModels from '@/components/StudioModels';
import ImgWithParagraf from '@/components/ImgWithParagraf';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import CookieBanner from '@/components/CookieBanner';
import Title from '@/components/ui/Title';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';
import RollingBanner from '@/components/RollingBanner';

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/home-pages/1?populate=introduction.arrowAnchor.icon`
  );
  const clientsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-pages?populate=clients.logos`);
  const homeData = response.data.attributes;
  const clientData = clientsResponse.data;
  return {
    props: {
      homeData: homeData,
      clientData: clientData,
    },
  };
}

export default function Home({ homeData, clientData }) {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);
  const [introData, setIntroData] = useState({});
  const [clientsData, setClientsData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  const ref2 = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  useEffect(() => {
    setIntroData(homeData.introduction);
    setClientsData(clientData[1].attributes.clients);

    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, [setHasLoaded]);

  if (!hasLoaded) {
    return <Loader />;
  } else {
    return (
      <main className={` transition-opacity ease-in duration-300 relative z-0 bg-off-white`}>
        <div>
          <div className="h-screen w-screen bg-dark"></div>
          <div className="fullscreen flex-col justify-center page-content-container">
            {introData &&
              introData.arrowAnchor &&
              introData.arrowAnchor.icon &&
              introData.arrowAnchor.icon.data &&
              introData.arrowAnchor.icon.data.attributes && (
                <>
                  <TitleWithParagraf
                    variant="pageTitle"
                    introData={introData}
                    subtitle={introData.subtitle}
                    title={introData.title}
                    paragraf={introData.paragraf}
                  />
                  <div
                    ref={ref2}
                    className={`${
                      isVisible ? ' appear-on-scroll delay-300' : 'before-scroll translate-y-4'
                    } v-space-xl flex justify-start gap-2 w-full `}
                  >
                    <Anchor variant="arrowLink" href={introData.arrowAnchor.url} title={introData.arrowAnchor.title} />
                    <Image
                      src={`http://localhost:1337${introData.arrowAnchor.icon.data.attributes.url}`}
                      alt={introData.arrowAnchor.icon.data.attributes.alternativeText}
                      width={40}
                      height={40}
                    />
                  </div>
                </>
              )}
          </div>
          <div className="page-content-container v-space-xl pt-32">
            <div ref={ref} className={`${isVisible ? 'appear-on-scroll delay-300' : 'before-scroll translate-y-4'}`}>
              <Title title="The benefits" variant="pageTitle" />
            </div>
            <div className="sticky top-0">
              <ImgWithParagraf
                paragrafText="Transition seamlessly between various locations at the touch of a button. No need to transport your whole production to a different location."
                title="Efficiency in Cost and Time"
              />
            </div>
            <div className="sticky top-0">
              <ImgWithParagraf
                paragrafText="Thanks to In-Camera VFX, the final image is immediately visible."
                title="Elimination of Extensive Post-Production"
              />
            </div>
            <div className="sticky top-0">
              <ImgWithParagraf
                paragrafText="Overcome the traditional challenges associated with filming through elements like glass, smoke, and haze on a green screen."
                title="Enhanced Environmental Effects"
              />
            </div>
          </div>
          <div className="page-content-container v-space-xl">
            <StudioModels
              title="Ideal production space"
              paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="">
            <RollingBanner clientData={clientsData} />
          </div>
        </div>
      </main>
    );
  }
}
