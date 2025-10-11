'use client';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const AnnouncementBar = () => {
  const [nextText, setNextText] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextText = () => {
    // Start fade-out transition
    setIsTransitioning(true);

    setTimeout(() => {
      // Update text after fading out
      setNextText(nextText === 1 ? 2 : 1);
      // Start fade-in transition
      setIsTransitioning(false);
    }, 500); // This should match your transition duration
  };

  const textContent = (
    nextText === 1
      ? "10% off when you sign up"
      : <Link href="/products" className="underline hover:no-underline">NEW ARRIVALS JUST LANDED</Link>
  );

  return (
    <div className="bg-[#6dc4b7] text-center py-4 font-medium px-4 w-full flex justify-between items-center font-m-plus-1 text-sm">
      <MdKeyboardArrowLeft onClick={handleNextText} className="text-xl cursor-pointer" />
      <div
        className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
      >
        {textContent}
      </div>
      <MdKeyboardArrowRight onClick={handleNextText} className="text-xl cursor-pointer" />
    </div>
  );
};

export default AnnouncementBar;
