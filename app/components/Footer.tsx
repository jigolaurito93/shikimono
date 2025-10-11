import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-8 md:px-16 lg:px-24 py-12 lg:py-14 bg-black text-white gap-12 xl:px-56">
      <div className="w-full lg:w-1/3 text-md flex flex-col gap-4 lg:gap-2 font-medium">
        <div>Track Order Status</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div> Refund Policy</div>
        <div>Terms of Service</div>
      </div>
      <div className="md:w-full text-2xl md:text-4xl lg:w-1/3 flex justify-center md:justify-start items-center gap-8 lg:justify-start">
        <FaFacebook />
        <FaInstagram />
        <FaTiktok />
      </div>
      <div className="hidden lg:flex w-1/3 text-md flex-col gap-2 font-medium">
        <div>Track Order Status</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div> Refund Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
