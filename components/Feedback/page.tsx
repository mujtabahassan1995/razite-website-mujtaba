import React from 'react'
import Image from 'next/image'
export default function Feedback  ()  {
  return (
    <div className='sm:pt-12 sm:w-full flex sm:gap-4 sm:px-50 sm:flex-row flex-col px-[4%]'>
        <div className='w-full hover:bg-gradient-to-r text-black from-blue-700 to-blue-900 hover:text-white rounded-3xl py-14 px-10 flex flex-col gap-10 items-start space-x-6 shadow-xl max-w-4xl mx-auto my-12'>
            <Image 
                className="w-10 h-7"
                src="/Comma.jpeg"
                alt="Logo"
                width={90}
                height={90}
            />
            <div className="">
                <p>
                "Technology is not just about innovation — it’s about solving real problems at scale."
                </p>
                <h3 className='font-bold pt-10'>
                    Syed Raza Abbas Kazmi
                </h3>
                <p>
                    Founder & CEO
                </p>
            </div>
        
        </div>
        <div className='w-full hover:bg-gradient-to-r text-black from-blue-700 to-blue-900 hover:text-white rounded-3xl py-14 px-10 flex flex-col gap-10 items-start space-x-6 shadow-xl max-w-4xl mx-auto my-12'>
            <Image 
                className="w-10 h-7"
                src="/Comma.jpeg"
                alt="Logo"
                width={90}
                height={90}
            />
            <div className="">
                <p>
                "Behind every great product is a team that knows how to build and adapt."
                </p>
                <h3 className='font-bold pt-10'>
                    Malik Muzzammil
                </h3>
                <p>
                    Co-Founder & CTO
                </p>
            </div>
        
        </div>
    </div>
  )
}
