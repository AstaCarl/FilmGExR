import Loader from "@/components/Loader";
import { fetcher } from "../../lib/api";
import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import HeroSection from "@/components/HeroSection";
import StudioModels from "@/components/StudioModels";
import ImgWithParagraf from "@/components/ImgWithParagraf";
import TitleWithParagraf from "@/components/TitleWithParagraf";
import CookieBanner from "@/components/CookieBanner";
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
        <TitleWithParagraf introData={introData}/>
        {/* <StudioModels/> */}
        {/* <ImgWithParagraf/> */}
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




