import React from 'react';

export default function Button({ buttonText, variant, type, onClick }) {
  let classNames =
    'font-sans pointer hover:opacity-80 hover:text-red transition-all duration-200 ease-in text-lg font-semibold';

  if (variant === 'cookie-accept') {
    classNames += ' bg-white rounded-lg px-6 py-2';
  } else if (variant === 'cookie-decline') {
    classNames += ' bg-gray rounded-lg px-6 py-2 text-white';
  } else if (variant === 'active') {
    classNames += ' text-red underline underline-offset-4 ';
  }

  return (
    <button onClick={onClick} type={type} className={classNames}>
      {buttonText}
    </button>
  );
}
