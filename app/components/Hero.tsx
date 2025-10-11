import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-neutral-500 lg:bg-[#6dc4b7] lg:text-white">
      {/* Left side image */}
      <div className="relative aspect-square overflow-hidden lg:w-3xl">
        <Image
          src="/claytonshot.png"
          alt="hero"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
        <div className="hidden md:flex lg:hidden absolute top-20 pl-14 pr-28 text-4xl leading-14 font-medium text-neutral-700">&quotWhere softness meets style, creating spaces for play, connection, and timeless memories&quot</div>
      </div>
      {/* Left side image */}

      {/* Right side content */}
      <div className="flex-1 lg:flex lg:flex-col justify-center items-center lg:gap-4 lg:px-12 2xl:px-36 px-7 lg:py-12 ">
        <h1 className="hidden lg:flex text-8xl font-bold font-mochiy-pop">Shikimono</h1>
        <p className="text-center md:hidden lg:flex lg:px-6 xl:px-2 text-2xl my-8 font-medium font-m-plus-1">
        &quotWhere softness meets style, creating spaces for play, connection, and timeless memories&quot
        </p>
        <button className="md:hidden lg:flex px-6 py-3 bg-black cursor-pointer text-white rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
      {/* Right side content */}
    </div>
  );
};

export default Hero;
