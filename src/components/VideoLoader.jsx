

import React from 'react'
import { LoaderContext } from '../contexts/LoaderContext';
import { useContext } from 'react';


export default function VideoLoader() {
    const { hasLoaded } = useContext(LoaderContext);
    if (hasLoaded) {
        return null;
      }
    
  return (
    <div>
    <div className='opacity-100 h-screen w-screen top-0 fixed z-[2000]' style={{animation: 'fadeIn 5s'}}></div>
<video autoPlay preload='auto' muted playsInline name="Video Name" className="opacity-100 h-screen top-0 relative z-[200] object-cover bg-dark" width="100%" height="100%">
<source src="/assets/trimmed-logo-ani.mp4" type="video/mp4"/>
</video>
</div>
  )
}
