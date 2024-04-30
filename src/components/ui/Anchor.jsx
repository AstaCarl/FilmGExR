import React from 'react';
import Link from 'next/link';


export default function Anchor({ href, title, variant, children }) {
  let classNames = 'font-sans pointer transition-all duration-200 ease-in';


  // Add additional classNames based on the variant prop
  if (variant === 'nav') {
    classNames += ' text-lg hover:text-red'; // Example styles for nav links
  } else if (variant === 'footer') {
    classNames += ' text-md hover:text-red'; // Example styles for footer links
  } // Add more variants as needed
  else if (variant === 'logo') {
    classNames += ' text-2xl font-syntax hover:text-black'; // Example styles for footer links
  } // Add more variants as needed
  else if (variant === 'arrowLink') {
    classNames += ' text-2xl text-red hover:pr-1 ease-in duration-200'; // Example styles for footer links
  } // Add more variants as needed


  return (
<Link href={href} className={classNames}>
  {title}
  {children}
</Link>
  );
}
