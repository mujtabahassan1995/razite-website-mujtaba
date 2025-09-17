import React from 'react'
import Image from 'next/image'
import Form from '../Form/page'
export default function Contact ()  {
  return (
    <div id='contact-us' className='sm:pt-12 sm:w-full flex flex-col-reverse sm:flex-row'>
        <div>
            <h1 className="text-4xl font-semibold text-gray-900 lg:text-5xl leading-snug sm:text-left text-center">
                Ready to Build Something Great?
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 sm:text-left text-center">
                Let’s talk tech. Drop us a message and get expert guidance on your next big idea.
            </p>
            <div>
                <Form />
            </div>
        </div>
        <div>
            <Image
                className="sm:w-150 sm:h-150 w-100 h-100"
                src="/Desk.jpeg"
                alt="Logo"
                width={90}
                height={90}
            />
        </div>
    </div>
  )
}
