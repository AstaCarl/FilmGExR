import React from 'react';
import Video from './Video';
import { Link } from 'react-scroll';

export default function HeroSection({ mobileSrc, desktopSrc }) {
  return (
    <div className="h-screen w-screen">
      <div className="relative z-0">
        <Video mobileSrc={mobileSrc} desktopSrc={desktopSrc} />
        <Link
          to="firstSection"
          className="scroll-link uppercase absolute bottom-48 text-xl text-white rotate-90 left-[45%] font-sans tracking-widest scoll-link cursor-pointer"
        >
          {'scroll'.split('').map((char, i) => (
            <span style={{ animation: `spell 2s ease infinite ${i / 10}s` }}>{char}</span>
          ))}
          <span
            style={{ animation: 'long 2s 2s ease infinite' }}
            className="bg-white h-0.5 absolute translate-y-[18px] translate-x-4"
          ></span>
        </Link>
      </div>
    </div>
  );
}
