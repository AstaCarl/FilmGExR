import React from 'react'

export default function Button({buttonText, variant, type}) {
  let classNames = 'font-sans pointer hover:opacity-80 hover:text-red transition-all duration-200 ease-in text-md font-semibold';


  // Add additional classNames based on the variant prop
  if (variant === 'cookie-accept') {
    classNames += ' bg-white rounded-lg px-6 py-2'; // Example styles for nav links
  } else if (variant === 'cookie-decline') {
    classNames += ' bg-gray rounded-lg px-6 py-2 text-white'; // Example styles for footer links
  } // Add more variants as needed


  return (
    <button type={type} className={classNames}>{buttonText}</button>
  )
}
