import React from 'react';
import Button from './ui/Button';
import Paragraf from './Paragraf';
import CookieModal from './CookieModal';

export default function CookieBanner({ onClick, onClick2, showCookieBanner }) {
  return (
    <div
      className={` bg-black w-fit fixed z-1 bottom-2 left-2 rounded-lg px-6 py-4 flex flex-col items-start gap-2 shadow-lg md:gap-2 md:bottom-5 md:left-5 lg:flex-row lg:items-center ${
        showCookieBanner ? '' : 'hidden'
      }`}
    >
      <Paragraf className="text-white" paragrafText="We use cookies to improve our service," />
      <button
        aria-label="Read more about our cookie policy"
        role="button"
        onClick={onClick2}
        className="text-white opacity-70 mr-2 hover:opacity-50 duration-300 ease-in-out"
      >
        learn more
      </button>
      <div className="flex gap-2 md:gap-4">
        <Button aria="Aceept cookies" onClick={onClick} variant="cookie-accept" buttonText="OK" />
        <Button aria="Decline cookies" onClick={onClick} variant="cookie-decline" buttonText="Don't track me" />
      </div>
    </div>
  );
}
