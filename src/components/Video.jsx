import React, { useState, useEffect } from 'react';

export default function Video({ mobileSrc, desktopSrc, posterDesktop, posterMobile }) {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth >= 768 ? desktopSrc : mobileSrc);
  const [posterSrc, setPosterSrc] = useState(window.innerWidth >= 768 ? posterDesktop : posterMobile);

  useEffect(() => {
    // Update video source based on window width
    const updateVideoSrc = () => {
      if (window.innerWidth >= 768) {
        // 768px is typically considered the start of medium screens
        setVideoSrc(desktopSrc);
        setPosterSrc(posterDesktop);
      } else {
        setVideoSrc(mobileSrc);
        setPosterSrc(posterMobile);
      }
    };

    updateVideoSrc();

    window.addEventListener('resize', updateVideoSrc);

    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, [mobileSrc, desktopSrc]);

  return (
    <div>
      <video
        poster={posterSrc}
        loop
        width="100%"
        height="100%"
        preload="auto"
        muted
        autoPlay
        playsInline
        name="Video Name"
        className="h-screen object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
