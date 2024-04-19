import React from 'react'
import Button from './ui/Button'
import Paragraf from './Paragraf'

export default function CookieBanner() {
  return (
    <div>
        <div className='bg-black w-fit rounded-lg fixed z-[20] bottom-2 left-2 px-6 py-4 flex flex-col items-start gap-2 shadow-lg md:gap-4 md:bottom-5 md:left-5 lg:flex-row lg:items-center'>
            <Paragraf className="text-white" paragrafText="We use cookies to improve our service"/>
            <div className='flex gap-2 md:gap-4'>
            <Button variant="cookie-accept" buttonText="OK"/>
            <Button variant="cookie-decline" buttonText="Don't track me"/>
            </div>
        </div>
    </div>
  )
}
