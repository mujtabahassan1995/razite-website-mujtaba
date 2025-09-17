import React from 'react'
import CTA from '../CTA/page'
export default function services  ()  {
  return (
    <div id='about-us' className='sm:pt-12 sm:w-full flex flex-col sm:flex-row '>
        <div className="flex-1 self-center text-center lg:text-left sm:w-1/2">
          <h1 className="text-4xl font-semibold text-gray-900 lg:text-5xl leading-snug">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            From startups to growing enterprises, we build the digital infrastructure that keeps you moving forward. With powerful tools and seamless solutions, we simplify complexity so you can focus on strategy, scale, and success.
          </p>
        </div>
        <div className='sm:w-1/2 sm:px-0 px-[4%]'>
            <CTA />
        </div>
    </div>
   
  )
}
