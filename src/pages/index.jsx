import Loader from "@/components/Loader";
import { fetcher } from "../../lib/api";
import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import HeroSection from "@/components/HeroSection";
import StudioModels from "@/components/StudioModels";
import ImgWithParagraf from "@/components/ImgWithParagraf";
import TitleWithParagraf from "@/components/TitleWithParagraf";
import CookieBanner from "@/components/CookieBanner";
import Title from "@/components/ui/Title";

// import VideoLoader from "@/components/VideoLoader";



export default function Home({ tests, menu}) {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);
  const [introData, setIntrodData] = useState({});


  useEffect(() => {
    const fetchNavigationData = async () => {
      try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-pages/1?populate=introduction.arrowAnchor.icon`);
        const introData = await response;
        setIntrodData(introData.data.attributes.introduction);
        console.log("introData", introData)

      } catch (error) {
        console.error("Error fetching navigation data:", error)
      }
    };
    // setTimeout(fetchNavigationData, 2000);
    fetchNavigationData();

  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, [setHasLoaded]);



  if (!hasLoaded) {
    return (
      // <VideoLoader/>
      <Loader/>
    );
  } else {
  return (
    <main  className={` transition-opacity ease-in duration-300 relative z-0 bg-off-white`}>
      <div >

        {/* <HeroSection /> */}
        <div className="h-screen w-screen bg-dark"></div>
        <div className="fullscreen">
        <TitleWithParagraf introData={introData}/>
        </div>
        <div className="page-content-container v-space-xl">
        <Title title="The benefits" variant="pageTitle"/>
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
        paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        </div>



        {/* <CookieBanner/> */}
      </div>
    </main>
  );
}
}

// export async function getStaticProps() {
//   const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-pages/1?populate=*`)
//   const homeData = response.data.attributes
//   console.log("homeData", homeData)
//   return {
//     props: {
//       homeData: homeData
//     }

//   }
// }




