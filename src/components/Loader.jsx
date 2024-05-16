import React from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import { useContext } from 'react';

export default function Loader() {
  const { hasLoaded } = useContext(LoaderContext);
  if (hasLoaded) {
    return null;
  }

  return (
    <div className="opacity-100 h-screen w-screen top-0 fixed z-[2000] bg-dark flex flex-col items-center justify-center">
      <div
        style={{
          animation: 'fadeOut 1.5s 3.5s',
        }}
        className="bg-dark h-screen w-screen fixed z-[2000] top-0 opacity-0"
      ></div>
      <h1
        style={{ animation: 'fadeUp 1.2s forwards', animationDelay: '2s' }}
        className="text-white opacity-0 font-sans font-bold text-[45px] lg:text-[96px] flex w-[214px] lg:w-[428px] lg:-mb-4 justify-start"
      >
        FilmGExR
      </h1>
      <div
        style={{ animation: 'darkBlue 3.2s' }}
        className={`bg-dark-blue w-[214px] h-[91px] lg:w-[428px] lg:h-[182px] flex items-end border-dark border-2`}
      >
        <div
          style={{ animation: 'lightBlue 2.9s' }}
          className={`bg-light-blue opcaity-0 w-[149px] h-[81px] lg:w-[298px] lg:h-[162px] flex items-end border-dark border-t-2 border-r-2 `}
        >
          <div
            style={{ animation: 'white 2.6s' }}
            className={`bg-white w-[124px] lg:w-[248px] h-[70px] lg:h-[130px] flex items-end border-dark border-t-2 border-r-2 animate-fadeIn duration-1000 delay-1000`}
          >
            <div
              style={{ animation: 'yellow 2.3s' }}
              className={`bg-yellow w-[92px] h-[62px] lg:w-[184px] lg:h-[124px] border-dark flex items-end border-t-2 border-r-2 animate-fadeIn duration-1000 delay-1500`}
            >
              <div
                style={{ animation: 'orange 2s' }}
                className={`bg-orange w-[68px] lg:w-[136px] h-[51px] lg:h-[102px] flex items-end border-dark border-t-2 border-r-2 animate-fadeIn duration-1000 delay-2000`}
              >
                <div
                  style={{ animation: 'brightRed 1.7s' }}
                  className={`bg-bright-red w-[53px] lg:w-[106px] h-[42px] lg:h-[84px] flex items-end border-dark border-t-2 border-r-2 animate-fadeIn duration-1000 delay-2500`}
                >
                  <div
                    style={{ animation: 'darkRed 1.2s' }}
                    className={`bg-dark-red w-[32px] lg:w-[64px] h-[32px] lg:h-[64px] border-dark border-t-2 border-r-2 animate-fadeIn duration-1000 delay-3000`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2
        style={{ animation: 'fadeDown 1s forwards', animationIterationCount: 1, animationDelay: '2.2s' }}
        className="text-white font-sans pt-2 font-bold text-[16px] lg:text-[34px] flex justify-start opacity-0"
      >
        Virtual production studio
      </h2>
    </div>
  );
}
