
import React from 'react';
import Image from "next/image";
export default function CTA  ()  {
  return (
    <div>

        <div className="hover:bg-gradient-to-r sm:text-black sm:from-blue-700 sm:to-blue-900 hover:text-white sm:rounded-3xl sm:p-8 p-8 sm:flex sm:items-start items-center sm:space-x-6 sm:shadow-xl sm:max-w-4xl max-w-4xl sm:mx-auto sm:my-12 flex flex-col sm:flex-row sm:text-left text-center text-black shadow-xl rounded-3xl my-12 mx-auto">
        <div className="flex-shrink-0 bg-[#E6F4F2] bg-opacity-20 rounded-full p-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-[#2284C7]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.934 9.073c-.005.394.02.798.05.998.03.201.07.404.12.607.05.202.103.407.159.613.056.205.115.41.177.614.06.204.12.408.182.613a12.008 12.008 0 00-.916 3.123A12.01 12.01 0 0012 21.073c.394-.005.798-.02 1.002-.05.201-.03.404-.07.607-.12.202-.05.407-.103.613-.159.205-.056.41-.115.614-.177.204-.06.408-.12.613-.182a12.008 12.008 0 003.123.916 12.01 12.01 0 00.998-.05c.201-.03.404-.07.607-.12.202-.05.407-.103.613-.159.205-.056.41-.115.614-.177.204-.06.408-.12.613-.182a12.008 12.008 0 00.916-3.123 12.01 12.01 0 00.05-.998c.03-.201.07-.404.12-.607.05-.202.103-.407.159-.613.056-.205.115-.41.177-.614.06-.204.12-.408.182-.613a12.008 12.008 0 00.916-3.123A12.01 12.01 0 0021.073 12c.005-.394.02-.798.05-1.002.03-.201.07-.404.12-.607.05-.202.103-.407.159-.613.056-.205.115-.41.177-.614.06-.204.12-.408.182-.613a12.008 12.008 0 00.916-3.123A12.01 12.01 0 0021.073 3c-.394.005-.798.02-1.002.05-.201.03-.404.07-.607.12-.202.05-.407.103-.613.159z"
            />
            </svg>
        </div>
        
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">IT Consultancy Services</h2>
            <p className="leading-relaxed">
            We provide IT consultancy services to help businesses navigate the complexities of technology, including cloud strategy, cybersecurity, and digital transformation.
            </p>
        </div>
        </div>
        <div className="hover:bg-gradient-to-r sm:text-black sm:from-blue-700 sm:to-blue-900 hover:text-white sm:rounded-3xl sm:p-8 p-8 sm:flex sm:items-start items-center sm:space-x-6 sm:shadow-xl sm:max-w-4xl max-w-4xl sm:mx-auto sm:my-12 flex flex-col sm:flex-row sm:text-left text-center text-black shadow-xl rounded-3xl my-12 mx-auto">
        <div className="flex-shrink-0 bg-[#E6F4F2] bg-opacity-20 rounded-full p-4">
            <Image 
            className="w-10 h-10"
            src="/Bulb.jpeg"
            alt="Logo"
            width={90}
            height={90}
            priority/>
        </div>
        
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Smart Application Development</h2>
            <p className="leading-relaxed">
            We design intelligent, user-focused AI web and application solutions that deliver real value — from automation tools to seamless integrations that enhance productivity.
            </p>
        </div>
        </div>
        <div className="hover:bg-gradient-to-r sm:text-black sm:from-blue-700 sm:to-blue-900 hover:text-white sm:rounded-3xl sm:p-8 p-8 sm:flex sm:items-start items-center  sm:space-x-6 sm:shadow-xl sm:max-w-4xl max-w-4xl sm:mx-auto sm:my-12 flex flex-col sm:flex-row sm:text-left text-center text-black shadow-xl rounded-3xl my-12 mx-auto items-center">
        <div className="flex-shrink-0 bg-[#E6F4F2] bg-opacity-20 rounded-full p-4">
            <Image 
            className="w-10 h-10"
            src="/SQL.jpeg"
            alt="Logo"
            width={90}
            height={90}
            priority/>
        </div>
        
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Data Services</h2>
            <p className="leading-relaxed">
            We provide comprehensive data services, including data migration, integration, and management, to help businesses harness the full potential of their data.
            </p>
        </div>
        </div>
    </div>
  );
};

