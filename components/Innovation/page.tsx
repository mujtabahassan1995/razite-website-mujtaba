import React from 'react'
import Image from "next/image";
export default function Innovation  ()  {
  return (
    <div className='sm:w-full sm:flex flex sm:flex-row flex-col-reverse'>
        <div className="flex-1 self-center text-center lg:text-left sm:w-1/2 w-full">
          <h1 className="text-4xl font-semibold text-gray-900 lg:text-5xl leading-snug">
            Where Innovation Meets Execution
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            We combine cutting-edge tech with business insight to deliver software that actually moves the needle.
          </p>
        </div>
        <div className='w-full sm:w-1/2'>
            <Image
                        className="w-100 h-100 sm:w-150 sm:h-150"
                        src="/ThirdSec.jpeg"
                        alt="Logo"
                        width={90}
                        height={90}
                        priority
                    />
        </div>
    </div>
   
  )
}
