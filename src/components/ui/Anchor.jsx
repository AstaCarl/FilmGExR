import React from 'react';
import Link from 'next/link';

export default function Anchor({ href, title, variant, children, target, aria }) {
  let classNames = 'font-sans pointer transition-all duration-200 ease-in';

  if (variant === 'nav') {
    classNames += ' text-lg hover:text-red';
  } else if (variant === 'footer') {
    classNames += ' text-md hover:text-red';
  } else if (variant === 'logo') {
    classNames += ' text-2xl font-syntax hover:text-black';
  } else if (variant === 'arrowLink') {
    classNames += ' text-xl md:text-2xl text-red ';
  } else if (variant === 'smallArrowLink') {
    classNames += ' text-lg text-red';
  }

  return (
    <Link aria-label={aria} href={href} className={classNames} target={target}>
      {title}
      {children}
    </Link>
  );
}
