import React from 'react';

export default function VideoModal({ src, onclick }) {
  return (
    <div className="w-screen h-screen fixed z-[3000] top-[0] bg-gray">
      <button onClick={onclick} className="text-white absolute top-20 right-0 z-20 page-content-container">
        <div className="w-6 h-0.5 bg-red rotate-45"></div>
        <div className="w-6 h-0.5 bg-red -rotate-45 absolute top-0"></div>
      </button>
      <div className="flex justiy-center items-center h-full">
        <video
          controls
          preload="auto"
          name="Video Name"
          className="w-full h-auto object-cover"
          width="100%"
          height="100%"
        >
          <source src={src} />
        </video>
      </div>
    </div>
  );
}
