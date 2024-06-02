import React from 'react';

export default function Button({ buttonText, variant, type, onClick, aria }) {
  //default css styling
  let classNames =
    'font-sans pointer hover:opacity-80 hover:text-red transition-all duration-200 ease-in text-lg font-semibold';
  // Depending on the 'variant' prop, add different CSS classes
  if (variant === 'cookie-accept') {
    classNames += ' bg-white rounded-lg px-6 py-2 text-md';
  } else if (variant === 'cookie-decline') {
    classNames += ' bg-gray rounded-lg px-6 py-2 text-white text-md';
  } else if (variant === 'active') {
    classNames += ' text-lg text-red';
  }

  return (
    <button aria-label={aria} role="button" onClick={onClick} type={type} className={classNames}>
      {buttonText}
    </button>
  );
}
