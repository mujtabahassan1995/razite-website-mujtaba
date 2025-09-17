import React from 'react'
import Image from 'next/image'

export default function Company  ()  {
  return (
    <div className='sm:pt-12 sm:w-full sm:flex sm:justify-center sm:gap-18 flex-col sm:flex-row items-center'>
        <div className='pt-[4%] sm:pt-0'>
         <Image 
            className="w-50 h-50"
            src="/PSEB.jpeg"
            alt="Logo"
            width={90}
            height={90}/>
        </div>
        <div  className='pt-[4%] sm:pt-0'>
         <Image 
            className="w-50 h-50"
            src="/ACS.jpeg"
            alt="Logo"
            width={90}
            height={90}/>
        </div>
        <div  className='pt-[4%] sm:pt-0'>
         <Image 
            className="w-50 h-50"
            src="/PEC.jpeg"
            alt="Logo"
            width={90}
            height={90}/>
        </div>
        <div  className='pt-[4%] sm:pt-0'>
         <Image 
            className="w-50 h-50"
            src="/PNAC.jpeg"
            alt="Logo"
            width={90}
            height={90}/>
        </div>

    </div>
  )
}
