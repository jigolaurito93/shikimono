"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiUser, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex w-full justify-between items-center py-4 px-12 lg:px-20 bg-white shadow-sm relative">
      {/* Logo */}
      <div className="w-5xl">
        <Image src="/swathelogo.png" alt="logo" width={180} height={100} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 items-center font-medium text-lg">
        <Link href="/" className="cursor-pointer">Home</Link>
        <Link href="/products" className="cursor-pointer">Products</Link>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">FAQs</li>
        <li className="cursor-pointer">Contact</li>

        <div className="flex gap-6 text-2xl pl-20">
          <FaCartArrowDown className="cursor-pointer" />
          <CiUser className="cursor-pointer" />
          <CiSearch className="cursor-pointer" />
        </div>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 font-medium text-lg lg:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <div>About</div>
          <div>FAQs</div>
          <div>Contact</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;