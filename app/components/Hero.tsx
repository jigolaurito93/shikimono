import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="relative hidden lg:block">
        <Image
          src="/heroBgDesktop.png"
          alt="hero"
          width={21000}
          height={1400}
          className="w-full"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-11 z-10 font-m-plus-1 font-bold tracking-tight text-white text-shadow-sm text-shadow-slate-300"
          style={{ fontSize: "clamp(10rem, 16vw, 30rem)" }}
        >
          SHIKIMONO
        </div>
      </div>

      {/* Mobile */}
      <div className="relative w-full lg:hidden">
        <Image
          src="/heroBg.png"
          alt="hero"
          width={21000}
          height={1400}
          className="w-full h-auto object-contain"
        />
        <button className="absolute bottom-32 md:bottom-56 left-1/2 -translate-x-1/2 px-10 py-2 md:px-16 md:py-3 md:text-2xl bg-white text-slate-800 rounded-md shadow-md hover:bg-[#5bb2a5]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
