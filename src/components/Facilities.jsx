import Title from '@/components/ui/Title';
import React, { useState, useRef } from 'react';
import { usePreciseObserver } from '../../lib/preciseObserver';

export default function Facilities({ uniqueData, serviceData, productionData, title }) {
  // These states control the visibility of the bullet points
  const [showBullets, setShowBullets] = useState(false);
  const [showBullets2, setShowBullets2] = useState(false);
  const [showBullets3, setShowBullets3] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // This hook observes the ref and sets isVisible to true when the ref is in view
  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

  // These handlers toggle the visibility of the bullet points and hide the others
  const handleShowBullets = () => {
    setShowBullets(!showBullets);
    setShowBullets3(false);
    setShowBullets2(false);
  };
  const handleShowBullets2 = () => {
    setShowBullets2(!showBullets2);
    setShowBullets3(false);
    setShowBullets(false);
  };
  const handleShowBullets3 = () => {
    setShowBullets3(!showBullets3);
    setShowBullets(false);
    setShowBullets2(false);
  };

  return (
    <article className="relative bg-off-white mb-36">
      <div
        ref={ref}
        className={`${
          isVisible
            ? 'appear-on-scroll border-b-2 border-red border-opacity-20 transition-all ease-in duration-300'
            : 'before-scroll border-b-2 border-red border-opacity-0 transition-all ease-in duration-300'
        } `}
      >
        <div className={` page-content-container`}>
          <Title title={title} variant="pageTitle" />
        </div>
        {/* The following sections are repeated for uniqueData, serviceData, and productionData // Each section has a
        title, a button to show/hide the bullet points, and a list of bullet points // The visibility of the bullet
        points and the rotation of the button are controlled by the state // The bullet points are mapped from the data
        props */}
        <div
          ref={ref}
          className={`tw-grid mt-10  h-[120px] place-items-center border-t-2 transition-all ease-in duration-300 border-red border-opacity-20 page-content-container ${
            isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
          }`}
        >
          <div className="col-span-10 col-start-1 w-full lg:col-span-6 lg:col-start-2">
            <Title variant="subtitle" title={uniqueData && uniqueData.title} />
          </div>
          <div className="col-span-1 col-start-12 lg:col-start-11">
            <button
              role="button"
              className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
              onClick={handleShowBullets}
              aria-label="Show or hide bulletpoints"
            >
              <div className="w-6 h-[2px] bg-red rounded-full"></div>
              <div
                className={`${
                  showBullets ? 'rotate-0' : ' rotate-90 '
                } absolute bottom-2.5 bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
              ></div>
            </button>
          </div>
        </div>
        <ul
          className={`page-content-container overflow-hidden transition-all duration-300 ease-in grid grid-cols-12 ${
            showBullets ? 'h-[300px]' : 'h-0'
          }`}
        >
          {uniqueData &&
            uniqueData.bulletpoints.map((item, index) => (
              <li key={index} className={`p-2 col-span-full lg:col-start-2`} style={{ listStyleType: 'disc' }}>
                {item.point}
              </li>
            ))}
        </ul>
        <div
          ref={ref}
          className={`tw-grid  h-[120px] place-items-center border-t-2 transition-all ease-in duration-300 border-red border-opacity-20 page-content-container ${
            isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
          }`}
        >
          <div className="col-span-10 col-start-1 w-full lg:col-span-6 lg:col-start-2">
            <Title variant="subtitle" title={serviceData && serviceData.title} />
          </div>
          <div className="col-span-1 col-start-12 lg:col-start-11">
            <button
              role="button"
              className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
              onClick={handleShowBullets2}
              aria-label="Show or hide bulletpoints"
            >
              <div className="w-6 h-[2px] bg-red rounded-full"></div>
              <div
                className={`${
                  showBullets2 ? 'rotate-0' : ' rotate-90 '
                } absolute bottom-2.5 bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
              ></div>
            </button>
          </div>
        </div>
        <ul
          className={`page-content-container overflow-hidden transition-all duration-300 ease-in grid grid-cols-12 ${
            showBullets2 ? 'h-[200px]' : 'h-0'
          }`}
        >
          {serviceData &&
            serviceData.bulletpoints.map((item, index) => (
              <li key={index} className={`col-span-full lg:col-start-2`} style={{ listStyleType: 'disc' }}>
                {item.point}
              </li>
            ))}
        </ul>
        <div
          ref={ref}
          className={`tw-grid  h-[120px] place-items-center border-t-2 transition-all ease-in duration-300 border-red border-opacity-20 page-content-container ${
            isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
          }`}
        >
          <div className="col-span-10 col-start-1 w-full lg:col-span-6 lg:col-start-2">
            <Title variant="subtitle" title={productionData && productionData.title} />
          </div>
          <div className="col-span-1 col-start-12 lg:col-start-11">
            <button
              role="button"
              className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
              onClick={handleShowBullets3}
              aria-label="Show or hide bulletpoints"
            >
              <div className="w-6 h-[2px] bg-red rounded-full"></div>
              <div
                className={`${
                  showBullets3 ? 'rotate-0' : ' rotate-90 '
                } absolute bottom-2.5 bg-red rounded-full w-6 h-[2px] transition-transform duration-500 ease-in-out`}
              ></div>
            </button>
          </div>
        </div>
        <ul
          className={`page-content-container overflow-hidden transition-all duration-300 ease-in grid grid-cols-12 ml-4 ${
            showBullets3 ? 'h-[200px]' : 'h-0'
          }`}
        >
          {productionData &&
            productionData.bulletpoints.map((item, index) => (
              <li key={index} className={`col-span-full lg:col-start-2 p-2`} style={{ listStyleType: 'disc' }}>
                {item.point}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}
