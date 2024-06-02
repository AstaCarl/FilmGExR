import React, { useState, useEffect, useContext, useRef } from 'react';
import { fetcher } from '../../lib/api';
import { LoaderContext } from '../contexts/LoaderContext';
import { useIntersectionObserver } from '../../lib/interSectionObserver';
import { usePreciseObserver } from '../../lib/preciseObserver';
import Loader from '@/components/Loader';
import StudioModels from '@/components/StudioModels';
import ImgWithParagraf from '@/components/ImgWithParagraf';
import TitleWithParagraf from '@/components/TitleWithParagraf';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';
import ClientsBanner from '@/components/ClientsBanner';
import Facilities from '@/components/Facilities';
import HeroSection from '@/components/HeroSection';

// Fetching static props for the home page
export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/home-page?populate=introduction,clients.logos,arrowAnchor.icon,benefits.image,HeroVideo,Studios.studios,uniqueInScandinavia.bulletpoints,fullService.bulletpoints,virtualProduction.bulletpoints`
  );
  const homeData = response.data.attributes;
  return {
    props: {
      homeData: homeData,
    },
  };
}

// Home component
export default function Home({ homeData }) {
  // Using context, state and refs
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);
  const [introData, setIntroData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isClientsVisible, setIsClientsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true));
  const clientsRef = useRef();

  // Observing the clientsRef
  usePreciseObserver(clientsRef, () => setIsClientsVisible(true));

  // Setting up the introData and a timer to set hasLoaded to true
  useEffect(() => {
    if (homeData && homeData.arrowAnchor && homeData.arrowAnchor.icon && homeData.clients) {
      setIntroData(homeData);
    }

    const timer = setTimeout(() => setHasLoaded(true), 4200);

    return () => {
      clearTimeout(timer);
      setIntroData(null);
    };
  }, [setHasLoaded, homeData]);

  // Getting the mobile and desktop sources for the HeroVideo
  const mobileSrc = homeData.HeroVideo.data[0].attributes.url;
  const desktopSrc = homeData.HeroVideo.data[1].attributes.url;

  // If the page hasn't loaded, show the Loader, otherwise render the home page
  if (!hasLoaded) {
    return <Loader />;
  } else {
    return (
      <main className="transition-opacity ease-in duration-300 relative z-0 bg-off-white flex flex-col">
        {/* Hero section with mobile and desktop sources */}
        <HeroSection mobileSrc={mobileSrc} desktopSrc={desktopSrc} />

        <div id="firstSection" className="page-content-container h-screen flex flex-col justify-center">
          {/* Check if introData and its nested properties exist */}
          {introData &&
            introData.arrowAnchor &&
            introData.arrowAnchor.icon &&
            introData.arrowAnchor.icon.data &&
            introData.arrowAnchor.icon.data.attributes && (
              <>
                {/* Title with paragraph component */}
                <TitleWithParagraf
                  variant="pageTitle"
                  introData={introData}
                  subtitle={introData.introduction.subtitle}
                  title={introData.introduction.title}
                  paragraf={introData.introduction.paragraf}
                />

                {/* Arrowlink */}
                <div
                  ref={ref}
                  className={`${
                    isVisible ? ' appear-on-scroll delay-300' : 'before-scroll translate-y-4'
                  } v-space-md md:v-space-lg flex justify-start gap-2 w-full`}
                >
                  <Anchor
                    aria="Go to contact page"
                    variant="arrowLink"
                    href={introData.arrowAnchor.url}
                    title={introData.arrowAnchor.title}
                  />
                  <Image
                    src={introData.arrowAnchor.icon.data.attributes.url}
                    alt={introData.arrowAnchor.icon.data.attributes.alternativeText}
                    width={20}
                    height={20}
                    className="w-6 md:w-10 h-auto"
                  />
                </div>
              </>
            )}
        </div>

        <div className="flex flex-col gap-36">
          {/* Clients banner */}
          <div
            ref={clientsRef}
            className={`${isClientsVisible ? ' appear-on-scroll delay-150' : 'before-scroll translate-y-4'} `}
          >
            <ClientsBanner clientData={introData} />
          </div>

          {/* Benefits section */}
          <div>
            {introData.benefits &&
              introData.benefits.map((benefit, index) => (
                <div key={index} className=" sticky -top-10  scroll-smooth space-y-6">
                  <ImgWithParagraf
                    paragrafText={benefit.paragraf}
                    subtitle={benefit.subtitle}
                    src={benefit.image.data.attributes.url}
                    alt={benefit.image.data.attributes.alternativeText}
                    title={index === 0 ? introData.benefitsTitle : undefined}
                    anchor={
                      introData &&
                      introData.arrowAnchor &&
                      introData.arrowAnchor.icon &&
                      introData.arrowAnchor.icon.data &&
                      introData.arrowAnchor.icon.data.attributes &&
                      index === introData.benefits.length - 1 ? (
                        <div className="hidden lg:flex w-full gap-2 pt-2 xl:pt-10">
                          <Anchor
                            variant="arrowLink"
                            href={introData.arrowAnchor.url}
                            title={introData.arrowAnchor.title}
                            aria="Go to contact page"
                          />
                          <Image
                            src={introData.arrowAnchor.icon.data.attributes.url}
                            alt={introData.arrowAnchor.icon.data.attributes.alternativeText}
                            width={40}
                            height={40}
                            className="h-auto w-auto"
                          />
                        </div>
                      ) : undefined
                    }
                  />
                </div>
              ))}
          </div>

          {/* Studio models and facilities sections */}
          <StudioModels studioData={homeData.Studios} />
          <Facilities
            uniqueData={introData.uniqueInScandinavia}
            serviceData={introData.fullService}
            productionData={introData.virtualProduction}
            title={introData.bulletsTitle}
          />
        </div>
      </main>
    );
  }
}
