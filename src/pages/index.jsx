import Loader from "@/components/Loader";
// import { fetcher } from "../../lib/api";
import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import HeroSection from "@/components/HeroSection";
import StudioModels from "@/components/StudioModels";
import ImgWithParagraf from "@/components/ImgWithParagraf";
import TitleWithParagraf from "@/components/TitleWithParagraf";
import CookieBanner from "@/components/CookieBanner";
// import VideoLoader from "@/components/VideoLoader";



export default function Home({ tests, menu }) {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);


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
    <main  className={` transition-opacity ease-in duration-300 relative z-0 bg-dark h-screen`}>
      <div >

        {/* <HeroSection />
        <TitleWithParagraf/>
        <StudioModels/>
        <ImgWithParagraf/>
        <CookieBanner/> */}
      </div>
    </main>
  );
}
}




