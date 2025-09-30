import React from "react";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full h-full py-4 px-20 items-center">
      <div className="w-5xl">
        <Image src="/swathelogo.png" alt="logo" width={200} height={100} />
      </div>
      <ul className="flex gap-8 items-center font-medium text-lg">
        <Link className="cursor-pointer" href="/">
          Home
        </Link>
        <Link className="cursor-pointer" href="/products">
          Products
        </Link>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">FAQs</li>
        <li className="cursor-pointer">Contact</li>
        <div className="flex gap-6 text-2xl pl-20">
          <FaCartArrowDown className="cursor-pointer" />
          <CiUser className="cursor-pointer" />
          <CiSearch className="cursor-pointer" />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
