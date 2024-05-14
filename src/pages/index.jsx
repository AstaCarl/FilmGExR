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
import Facilities from '@/components/Facilities';
import Video from '@/components/Video';
import HeroSection from '@/components/HeroSection';

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/home-page?populate=introduction,clients.logos,arrowAnchor.icon,benefits.image,HeroVideo`
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
    if (homeData && homeData.arrowAnchor && homeData.arrowAnchor.icon) {
      setIntroData(homeData);
    }

    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 4200);

    return () => {
      clearTimeout(timer);
      setIntroData(null);
    };
  }, [setHasLoaded, homeData]);

  const mobileSrc = `http://localhost:1337${homeData.HeroVideo.data[0].attributes.url}`;
  const desktopSrc = `http://localhost:1337${homeData.HeroVideo.data[1].attributes.url}`;

  if (!hasLoaded) {
    return <Loader />;
  } else {
    return (
      <main className={`transition-opacity ease-in duration-300 relative z-0 bg-off-white`}>
        <div>
          <HeroSection mobileSrc={mobileSrc} desktopSrc={desktopSrc} />
          <div id="firstSection" className="fullscreen flex-col justify-center page-content-container">
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
          <div className="v-space-xl pb-36 relative bg-off-white ">
            <RollingBanner clientData={introData.clients} />
          </div>
          <div className="v-space-xl">
            <div
              ref={ref}
              className={`${
                isVisible ? 'appear-on-scroll delay-300' : 'before-scroll translate-y-4'
              } page-content-container`}
            >
              <Title title="The benefits" variant="pageTitle" />
            </div>
            <div className="">
              {introData.benefits &&
                introData.benefits.map((benefit, index) => (
                  <div key={index} className="py-36 bg-of-white sticky top-0">
                    <ImgWithParagraf
                      paragrafText={benefit.paragraf}
                      title={benefit.subtitle}
                      src={`http://localhost:1337${benefit.image.data.attributes.url}`}
                      alt={benefit.image.data.attributes.alternativeText}
                    />
                    {introData &&
                      introData.arrowAnchor &&
                      introData.arrowAnchor.icon &&
                      introData.arrowAnchor.icon.data &&
                      introData.arrowAnchor.icon.data.attributes &&
                      index === introData.benefits.length - 1 && (
                        <div className="hidden relative lg:bottom-10 xl:bottom-24 lg:flex gap-2 page-content-container">
                          <Anchor
                            variant="arrowLink"
                            href={introData.arrowAnchor.url}
                            title={introData.arrowAnchor.title}
                          />
                          <Image
                            src={`http://localhost:1337${introData.arrowAnchor.icon.data.attributes.url}`}
                            alt={introData.arrowAnchor.icon.data.attributes.alternativeText}
                            width={40}
                            height={40}
                          />
                        </div>
                      )}
                  </div>
                ))}
            </div>
            <div className=" v-space-xl relative bg-off-white">
              <StudioModels
                title="Ideal production space"
                paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <Facilities />
          </div>
        </div>
      </main>
    );
  }
}
