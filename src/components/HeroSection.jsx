import React from 'react';
import Video from './Video';
import { Link } from 'react-scroll';

export default function HeroSection({ mobileSrc, desktopSrc, posterDesktop, posterMobile }) {
  return (
    <div className="h-screen w-screen bg-dark">
      <div className="relative z-0">
        <Video
          mobileSrc={mobileSrc}
          desktopSrc={desktopSrc}
          posterDesktop={posterDesktop}
          posterMobile={posterMobile}
        />
        <Link
          aria-label="scroll to first section"
          smooth={true}
          offset={-0}
          to="firstSection"
          rel="nofollow"
          className="scroll-link scroll-smooth uppercase absolute bottom-[130px] text-xl text-white rotate-90 left-[40%] md:left-[45%] font-sans tracking-widest scoll-link cursor-pointer"
        >
          {'scroll'.split('').map((char, i) => (
            <span key={i} style={{ animation: `spell 2s ease infinite ${i / 10}s` }}>
              {char}
            </span>
          ))}
          <span
            style={{ animation: 'long 2s ease infinite' }}
            className="bg-white h-0.5 absolute translate-y-[18px] translate-x-6"
          ></span>
        </Link>
      </div>
    </div>
  );
}
