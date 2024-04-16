import Loader from "@/components/Loader";
import { fetcher } from "../../lib/api";
import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import HeroSection from "@/components/HeroSection";



export default function Home({ tests, menu }) {
  const { hasLoaded, setHasLoaded } = useContext(LoaderContext);


  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setHasLoaded]);



  if (!hasLoaded) {
    return (
      <Loader/>
    );
  } else {
  return (
    <main style={{animation: 'fadeContent 1s'}} className={` transition-opacity ease-in duration-300 relative z-0`}>
      <div >
        <HeroSection/>
      </div>
    </main>
  );
}
}




