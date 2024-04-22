import React from 'react'
import {useState} from 'react'
import Button from './ui/Button'
import Paragraf from './Paragraf'

export default function CookieBanner() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)

const handleButtonClick = () => {
    setShowCookieBanner(false)
}

  return (
    <div className={`${showCookieBanner ? "" : "hidden"}`}>
        <div className='bg-black w-fit rounded-lg fixed z-[200] bottom-2 left-2 px-6 py-4 flex flex-col items-start gap-2 shadow-lg md:gap-4 md:bottom-5 md:left-5 lg:flex-row lg:items-center'>
            <Paragraf className="text-white" paragrafText="We use cookies to improve our service"/>
            <div className='flex gap-2 md:gap-4'>
            <Button onClick={handleButtonClick} variant="cookie-accept" buttonText="OK"/>
            <Button onClick={handleButtonClick} variant="cookie-decline" buttonText="Don't track me"/>
            </div>
        </div>
    </div>
  )
}
