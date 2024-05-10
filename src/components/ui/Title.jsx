import React from 'react';

export default function Title({ title, variant, ref }) {
  let classNames = '';

  if (variant === 'pageTitle') {
    classNames += ' page-title-size font-syntax text-red';
  } else if (variant === 'subtitle') {
    classNames += ' text-xl md:text-2xl text-black font-sans';
  } else if (variant === 'largeTitle') {
    classNames += 'text-3xl md:leading-none md:text-3xl text-white font-syntax';
  } else if (variant === '404') {
    classNames += ' text-8xl lg:text-[12rem] font-syntax text-red';
  } else if (variant === 'heroTitle') {
    classNames += 'text-3xl text-white font-syntax font-bold';
  } else if (variant === 'heroSubtitle') {
    classNames += 'text-xl text-white font-syntax font-bold';
  }

  return (
    <h1 className={classNames} ref={ref}>
      {title}
    </h1>
  );
}
