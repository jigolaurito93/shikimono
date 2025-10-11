'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

const AnnouncementBar = () => {
  const [nextText, setNextText] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Define the interval logic inside the effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setNextText(prevText => (prevText === 1 ? 2 : 1));
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array because the logic is self-contained

  // The handleNextText is now separate and used only by the buttons
  const handleNextText = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setNextText(prevText => (prevText === 1 ? 2 : 1));
      setIsTransitioning(false);
    }, 500);
  };

  const textContent = (
    nextText === 1
      ? "10% off when you sign up"
      : <Link href="/products" className="underline hover:no-underline">NEW ARRIVALS JUST LANDED</Link>
  );

  return (
    <div className="bg-[#6dc4b7] text-center py-4 font-medium px-4 w-full flex justify-between items-center font-m-plus-1 text-sm md:px-14 lg:px-24 xl:px-28">
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
