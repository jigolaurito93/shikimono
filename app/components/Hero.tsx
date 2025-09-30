import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex bg-[#6dc4b7] text-white">
      {/* Left side image */}
      <div className="w-xl">
        <Image
          src="/claytonshot.png"
          alt="hero"
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>

      {/* Right side content */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4 px-36">
        <h1 className="text-8xl font-bold font-mochiy-pop">Shikimono</h1>
        <p className="text-center text-3xl px-16 my-8 font-medium font-m-plus-1">
          We weave luxury into every fiber of our soft velvety mats,
          transforming spaces with elegance and comfort.
        </p>
        <button className="px-6 py-3 bg-black cursor-pointer text-white rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
