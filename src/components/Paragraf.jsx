import React from 'react';

export default function Paragraf({ paragrafText, className, id }) {
  return (
    <p id={id} className={className}>
      {paragrafText}
    </p>
  );
}
