import React from 'react';

export default function Title({ title, ref }) {
  return (
    <h1 className={`page-title-size font-syntax text-red `} ref={ref}>
      {title}
    </h1>
  );
}
