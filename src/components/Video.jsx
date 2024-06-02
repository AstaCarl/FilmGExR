import React, { useState, useEffect } from 'react';

// Video component that takes mobile and desktop sources as props
export default function Video({ mobileSrc, desktopSrc }) {
  // State for video source, initially set based on window width
  const [videoSrc, setVideoSrc] = useState(window.innerWidth >= 768 ? desktopSrc : mobileSrc);

  useEffect(() => {
    // Function to update video source based on window width
    const updateVideoSrc = () => {
      // If window width is 768px or more, set video source to desktop source
      if (window.innerWidth >= 768) {
        setVideoSrc(desktopSrc);
      } else {
        // If window width is less than 768px, set video source to mobile source
        setVideoSrc(mobileSrc);
      }
    };

    // Call the function to set initial video source
    updateVideoSrc();

    // Add event listener to update video source when window is resized
    window.addEventListener('resize', updateVideoSrc);

    // Clean up function to remove event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, [mobileSrc, desktopSrc]); // Dependencies for useEffect

  // Render video element with source set to videoSrc state
  return (
    <div className="bg-black">
      <video
        loop
        width="100%"
        height="100%"
        preload="auto"
        muted
        autoPlay
        playsInline
        name="Video Name"
        className="h-screen object-cover bg-black"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
