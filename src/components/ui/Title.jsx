import React from 'react'

export default function Title({ title, variant, ref}) {

  let classNames = '';


  // Add additional classNames based on the variant prop
  if (variant === 'pageTitle') {
    classNames += ' page-title-size font-syntax text-red'; // Example styles for nav links
  } else if (variant === 'subTitle') {
    classNames += ' text-lg text-black font-sans'; // Example styles for footer links
  } 
  else if (variant === '404') {
    classNames += ' text-8xl lg:text-[12rem] font-syntax text-red'; // Example styles for footer links
  } 
  else if (variant === 'heroTitle') {
    classNames += 'text-3xl text-white font-syntax font-bold'; // Example styles for footer links
  } 
  else if (variant === 'heroSubtitle') {
    classNames += 'text-xl text-white font-syntax font-bold'; // Example styles for footer links
  } 
  else if (variant === 'subtitle') {
    classNames += 'text-lg font-sans'; // Example styles for footer links
  } 
  
  return (
    <h1 className={classNames} ref={ref}>{title}</h1>
  )
}
