import Title from '@/components/ui/Title';
import React, { useState, useRef } from 'react';
import { usePreciseObserver } from '../../lib/preciseObserver';

export default function Facilities({ uniqueData, serviceData, productionData, title }) {
  const [showBullets, setShowBullets] = useState(false);
  const [showBullets2, setShowBullets2] = useState(false);
  const [showBullets3, setShowBullets3] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef();

  usePreciseObserver(ref, () => {
    setIsVisible(true);
  });

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
    <article className="h-screen flex flex-col v-space-xl mt-36">
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
        <div
          ref={ref}
          className={`tw-grid mt-16  h-[120px] place-items-center border-t-2 transition-all ease-in duration-300 border-red border-opacity-20 page-content-container ${
            isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
          }`}
        >
          <div className="col-span-10 col-start-1 w-full">
            <Title variant="subtitle" title={uniqueData && uniqueData.title} />
          </div>
          <div className="col-span-1 col-start-12">
            <button
              className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
              onClick={handleShowBullets}
              aria-label="Show or hide steps"
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
        <div
          className={`page-content-container overflow-hidden transition-all duration-300 ease-i ${
            showBullets ? 'h-[300px]' : 'h-0'
          }`}
        >
          {uniqueData &&
            uniqueData.bulletpoints.map((item, index) => (
              <li key={index} className={`n p-2`}>
                {item.point}
              </li>
            ))}
        </div>
        <div
          ref={ref}
          className={`tw-grid  h-[120px] place-items-center border-t-2 transition-all ease-in duration-300 border-red border-opacity-20 page-content-container ${
            isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
          }`}
        >
          <div className="col-span-10 col-start-1 w-full">
            <Title variant="subtitle" title={serviceData && serviceData.title} />
          </div>
          <div className="col-span-1 col-start-12">
            <button
              className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
              onClick={handleShowBullets2}
              aria-label="Show or hide steps"
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
        <div
          className={`page-content-container overflow-hidden transition-all duration-300 ease-i ${
            showBullets2 ? 'h-[300px]' : 'h-0'
          }`}
        >
          {serviceData &&
            serviceData.bulletpoints.map((item, index) => (
              <li key={index} className={`n p-2`}>
                {item.point}
              </li>
            ))}
        </div>
        <div
          ref={ref}
          className={`tw-grid  h-[120px] place-items-center border-t-2 transition-all ease-in duration-300 border-red border-opacity-20 page-content-container ${
            isVisible ? 'appear-on-scroll delay-300' : 'before-scroll'
          }`}
        >
          <div className="col-span-10 col-start-1 w-full">
            <Title variant="subtitle" title={productionData && productionData.title} />
          </div>
          <div className="col-span-1 col-start-12">
            <button
              className={`relative h-6 w-6 transition-transform duration-500 ease-in-out `}
              onClick={handleShowBullets3}
              aria-label="Show or hide steps"
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
        <div
          className={`page-content-container overflow-hidden transition-all duration-300 ease-i ${
            showBullets3 ? 'h-[300px]' : 'h-0'
          }`}
        >
          {productionData &&
            productionData.bulletpoints.map((item, index) => (
              <li key={index} className={`n p-2`}>
                {item.point}
              </li>
            ))}
        </div>
      </div>
    </article>
  );
}
