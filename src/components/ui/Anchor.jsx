import React from 'react';
import Link from 'next/link';

export default function Anchor({ href, title, variant, children }) {
  let classNames = 'font-sans pointer transition-all duration-200 ease-in';

  if (variant === 'nav') {
    classNames += ' text-lg hover:text-red';
  } else if (variant === 'footer') {
    classNames += ' text-md hover:text-red';
  } else if (variant === 'logo') {
    classNames += ' text-2xl font-syntax hover:text-black';
  } else if (variant === 'arrowLink') {
    classNames += ' text-2xl text-red hover:pr-1 ease-in duration-200';
  } else if (variant === 'smallArrowLink') {
    classNames += ' text-lg text-red hover:pr-1 ease-in duration-200';
  }

  return (
    <Link href={href} className={classNames}>
      {title}
      {children}
    </Link>
  );
}
