import React from 'react';

export default function Title({ title, variant, ref }) {
  let classNames = '';
  //depending on the 'variant' prop, add different CSS classes
  if (variant === 'pageTitle') {
    classNames += ' page-title-size font-syntax text-red';
  } else if (variant === 'subtitle') {
    classNames += ' text-xl md:text-2xl text-black font-sans';
  } else if (variant === 'largeTitle') {
    classNames += 'text-3xl md:leading-none md:text-3xl text-white font-syntax';
  }

  return (
    <h2 className={classNames} ref={ref}>
      {title}
    </h2>
  );
}
