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
  // const response = await fetcher(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/home-pages/1?populate=introduction.arrowAnchor.icon`
  // );
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/home-page?populate=introduction,clients.logos,arrowAnchor.icon,benefits.image`
  );
  const homeData = response.data.attributes;
  return {
    props: {
      homeData: homeData,
    },
  };
}

export default function Home({ homeData }) {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);
  const [introData, setIntroData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  const ref2 = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  useEffect(() => {
    setIntroData(homeData);

    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, [setHasLoaded]);

  if (!hasLoaded) {
    return <Loader />;
  } else {
    return (
      <main className={`transition-opacity ease-in duration-300 relative z-0 bg-off-white`}>
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
                    subtitle={introData.introduction.subtitle}
                    title={introData.introduction.title}
                    paragraf={introData.introduction.paragraf}
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
            {introData.benefits &&
              introData.benefits.map((benefit) => (
                <div className="sticky top-0">
                  <ImgWithParagraf
                    paragrafText={benefit.paragraf}
                    title={benefit.subtitle}
                    src={`http://localhost:1337${benefit.image.data.attributes.url}`}
                  />
                </div>
              ))}
            <div className=" v-space-xl relative bg-off-white">
              <StudioModels
                title="Ideal production space"
                paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            {/* <div className="">
              <RollingBanner clientData={introData.clients} />
            </div> */}
          </div>
        </div>
      </main>
    );
  }
}
