import React from 'react'
import Button from './ui/Button'
import Paragraf from './Paragraf'

export default function CookieBanner() {
  return (
    <div>
        <div className='bg-black w-fit rounded-lg fixed bottom-10 left-10 px-6 py-4 flex items-center gap-4 shadow-lg'>
            <Paragraf className="text-white" paragrafText="We use cookies to improve our service"/>
            <Button variant="cookie-accept" buttonText="OK"/>
            <Button variant="cookie-decline" buttonText="Don't track me"/>
        </div>
    </div>
  )
}
