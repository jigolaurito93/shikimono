'use client';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

const AnnouncementBar = () => {
  const [nextText, setNextText] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextText = () => {
    // Fade out the current text
    setIsTransitioning(true);

    // Wait for the fade-out transition to complete (500ms)
    setTimeout(() => {
      // Update the text after fading out
      setNextText(nextText === 1 ? 2 : 1);
      // Fade in the new text
      setIsTransitioning(false);
    }, 500);
  };

  // Add the automatic rotation with useEffect
  useEffect(() => {
    // Set up the interval for the automatic rotation
    const interval = setInterval(handleNextText, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [nextText]); // Run the effect whenever the text changes

  const textContent = (
    nextText === 1
      ? "10% off when you sign up"
      : <Link href="/products" className="underline hover:no-underline">NEW ARRIVALS JUST LANDED</Link>
  );

  return (
    <div className="bg-[#6dc4b7] text-center py-4 font-medium px-4 w-full flex justify-between items-center font-m-plus-1 text-sm md:px-14 lg:px-24 xl:px-28">
      <MdKeyboardArrowLeft onClick={handleNextText} className="text-xl cursor-pointer" />
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {textContent}
      </div>
      <MdKeyboardArrowRight onClick={handleNextText} className="text-xl cursor-pointer" />
    </div>
  );
};

export default AnnouncementBar;
