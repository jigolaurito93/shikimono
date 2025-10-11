import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-8 md:px-16 lg:px-24 py-12 lg:py-14 bg-black text-white gap-8">
      <div className="w-full lg:w-1/3 text-xl flex flex-col gap-4 lg:gap-2 font-medium">
        <div>Track Order Status</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div> Refund Policy</div>
        <div>Terms of Service</div>
      </div>
      <div className="w-1/2 md:w-full lg:w-1/3 flex justify-center items-center gap-8 text-4xl lg:justify-start">
        <FaFacebook />
        <FaInstagram />
        <FaTiktok />
      </div>
      <div className="hidden lg:flex w-1/3 text-xl flex-col gap-2 font-medium">
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
