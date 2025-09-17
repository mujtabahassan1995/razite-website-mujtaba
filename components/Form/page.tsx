import React from 'react'

export default function Form  ()  {
  return (
    <div className='pt-8'>
        

        <form className="sm:max-w-sm px-[4%]">
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Full Name*</label>
            <input type="text" id="fullName" className="bg-[#E4E4E7] text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your full name" required />
            
        </div>
        <div className='mb-5'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email*</label>
            <input type="email" id="email" className="bg-[#E4E4E7] text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
        </div>
        <div className='mb-5'>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-black">Phone Number</label>
            <input type="tel" id="phoneNumber" className="bg-[#E4E4E7] text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone number"/>
        </div>
        <div className='mb-5'>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message*</label>
            <textarea id='message' placeholder="Write your message..." className="bg-[#E4E4E7] text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 border rounded p-2 w-full h-32" required/>

        </div>
        <button type="submit" className="sm:bg-blue-600 bg-blue-600 sm:text-white text-white sm:px-4 px-4 sm:py-2 py-2 sm:rounded-xl rounded-xl w-full sm:w-30 hover:bg-[#3481BC]">Submit</button>
        </form>

    </div>
  )
}
