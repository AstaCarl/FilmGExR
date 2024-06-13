import React from 'react';

export default function VideoModal({ src, ref }) {
  return (
    <div className="w-screen h-screen fixed z-[2000] top-0 bg-black-transparent backdrop-blur">
      <div className="flex justiy-center items-center h-full ">
        <video
          onMouseDown={(e) => e.stopPropagation()}
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
