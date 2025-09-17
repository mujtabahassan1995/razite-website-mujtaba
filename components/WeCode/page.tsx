import React from 'react'
import Image from "next/image";

export default function WeCode  ()  {
  return (
    <div className='sm:w-full sm:flex sm:justify-center'>
        <div className='sm:w-1/2 w-full'>

            <Image 
                className="sm:w-150 sm:h-150 w-100 h-100"
                src="/HTMLCSS.jpeg"
                alt="Logo"
                width={90}
                height={90}
                priority
            />
        </div>
        <div className='sm:w-1/2 sm:flex sm:items-center text-center w-full'>
            <div className="">
                <h1 className="text-4xl font-semibold text-gray-900 lg:text-5xl leading-snug">
                    "We Code." You Grow.
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    We deliver high-impact digital solutions tailored to your unique workflows, customers, and growth goals. We follow a lean, agile approach to take your product from zero to launch with clarity, speed, and collaboration.
                </p>
            </div>
        </div>
    </div>
   
  )
}
