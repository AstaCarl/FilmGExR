import React from 'react'
import Image from 'next/image'

export default function ResponsiveImg({src, sizes, size_base, size_sm, size_md, size_lg, size_xl, size_2xl, alt, className, ...otherAttributes}) {
  return (
    <Image
    src={src}
    sizes={src && `${size_2xl ? `(min-width: 1536px) ${size_2xl}, ` : ''}${size_xl ? `(min-width: 1280px) ${size_xl}, ` : ''}${size_lg ? `(min-width: 1024px) ${size_lg}, ` : ''}${size_md ? `(min-width: 768px) ${size_md}, ` : ''}${size_sm ? `(min-width: 640px) ${size_sm}, ` : ''}${size_base}`}
    alt={alt}
    loading="lazy"
    className={className}
    {...otherAttributes}
/>
  )
}
