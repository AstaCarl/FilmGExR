import React from 'react';
import Paragraf from './ui/Paragraf';
import Button from './ui/Button';

// Cookie modal that shows more info on cookies policies
// It accepts two props: a boolean to control visibility and a function to hide the modal
export default function CookieModal({ setLearnMore, learnMore }) {
  // It hides the modal by calling the 'setLearnMore' function with 'false'
  const handleButtonClick = () => {
    setLearnMore(false);
  };

  return (
    // It's hidden if the 'learnMore' prop is false
    <div className={`${learnMore ? '' : 'hidden '} flex justify-center`}>
      <div className="shadow-lg flex flex-col gap-6 bg-black w-fit rounded-lg h-fit lg:w-[60%] p-6 lg:p-10">
        <Paragraf
          className="text-white"
          paragrafText="We use technologies, including cookies, to collect information about you for various purposes, including:"
        />
        <div className="text-white">
          <li>Functional</li>
          <li>Statistical</li>
          <li>Marketing</li>
        </div>
        <Paragraf
          className="text-white"
          paragrafText="By clicking ‘Accept’, you give your consent for all these purposes. "
        />
        <div className="flex gap-2 md:gap-4">
          <Button aria="Accept cookies" onClick={handleButtonClick} variant="cookie-accept" buttonText="OK" />
          <Button
            aria="Decline cookies"
            onClick={handleButtonClick}
            variant="cookie-decline"
            buttonText="Don't track me"
          />
        </div>
      </div>
    </div>
  );
}
