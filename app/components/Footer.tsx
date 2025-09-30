import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full px-80 py-20 bg-black text-white">
      <div className="w-1/3  text-xl flex flex-col gap-2 font-medium">
        <div>Track Order Status</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div> Refund Policy</div>
        <div>Terms of Service</div>
      </div>
      <div className="w-1/3 flex justify-center items-center gap-8 text-4xl">
        <FaFacebook />
        <FaInstagram />
        <FaTiktok />
      </div>
      <div className="w-1/3 ">s</div>
    </div>
  );
};

export default Footer;
