"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "../../components/page";
import Features from "../../components/Features/page";
import Services from "../../components/Services/page";
import WeCode from "../../components/WeCode/page";
import Innovation from "../../components/Innovation/page";
import StartUp from "../../components/StartUp/page";
import Feedback from "../../components/Feedback/page";
import Contact from "../../components/Contact/page";
import Reach from "../../components/Reach/page";
import Company from "../../components/Company/page";
import Footer from "../../components/Footer/page";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-sans bg-[#F4F7F4] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 sm:p-20">
      <header className="w-full ">
        <div className="sm:w-full sm:flex sm:content-start sm:justify-between hidden">

            <div className="">
              <Image
                className="w-32 h-14"
                src="/logo.jpeg"
                alt="Logo"
                width={90}
                height={90}
              />
            </div>
            <nav className="flex gap-6 justify-center items-center text-black">
            <Link href="#home">Home</Link>
            <Link href="#about-us">About Us</Link>
            <Link href="#contact-us">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-[#3481BC]">Contact Us</button>
            </Link>
            </nav>
        </div>
      <div className="sm:hidden">

        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-20">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                className="w-20 h-10"
                src="/logo.jpeg"
                alt="Logo"
                width={90}
                height={90}
              />
            </a>
            <button onClick={() => setIsOpen(!isOpen)}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-10" aria-controls="navbar-default" aria-expanded={isOpen}>
                {isOpen ? (
            // "X" icon
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
            </button>
            {isOpen && (
        <div className="w-full md:block md:w-auto pt-30 z-10" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#about-us" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
                </li>
                <li>
                  <a href="#contact-us" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                </li>
              </ul>
            </div>
      )}
            
          </div>
        </nav>
      </div>

      </header>
      <main id="home" className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />
        <Features />
        <Services />
        <WeCode />
        <Innovation />
        <StartUp />
        <Feedback />
        <Contact />
        {/* <Reach /> */}
        <Company />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
