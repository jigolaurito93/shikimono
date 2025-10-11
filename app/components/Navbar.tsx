"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiUser, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

interface NavLinksDesktop {
  label: string;
  href: string;
}

const navLinksDesktop: NavLinksDesktop[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "FAQs",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div className="flex w-full justify-between items-center py-4 px-5 md:px-20 xl:px-28 bg-white shadow-sm relative font-m-plus-1">
      {/* Mobile Menu Icon */}
      <div
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <RxCross2 className="text-[#6dc4b7]" />
        ) : (
          <RxHamburgerMenu className="text-[#6dc4b7]" />
        )}
      </div>

      {/* Mobile Dropdown with transition */}
      <div
        className={`fixed top-[147px] left-0 h-[calc(100vh-107px)] w-full shadow-xl bg-white flex flex-col items-center justify-between py-10 font-medium text-lg lg:hidden transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full text-xl md:text-lg">
          {navLinksDesktop.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:bg-gray-100 p-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Mobile Dropdown Section */}
        <div className="flex flex-col justify-start w-full py-6 px-4 gap-8 bg-[#6dc4b7]">
          <div className="cursor-pointer flex items-center gap-3">
            <CiUser className="text-2xl" />
            <div>Log In</div>
          </div>
          {/* Icons */}
          <div className="text-2xl flex gap-14 justify-center">
            <Link href={"/"}>
              <FaFacebook />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
            <Link href={"/"}>
              <FaTiktok />
            </Link>
          </div>
          {/* Icons */}
        </div>
        {/* Bottom Mobile Dropdown Section */}
      </div>

      {/* Logo */}
      <div className="w-5xl flex justify-center lg:justify-start">
        <Image src="/swathelogo.png" alt="logo" width={180} height={100} />
      </div>
      {/* Logo */}

      {/* Mobile Icons */}
      <div className="flex gap-5 md:gap-8 lg:hidden">
        <CiSearch className="cursor-pointer text-2xl text-[#6dc4b7]" />
        <FaCartArrowDown className="cursor-pointer text-2xl text-[#6dc4b7]" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-5 items-center font-medium text-lg text-[#6dc4b7] pl-8">
        <div className="flex items-center gap-5 lg:gap-10">
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
          <Link href="/products" className="cursor-pointer">
            Products
          </Link>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">FAQs</li>
          <li className="cursor-pointer">Contact</li>
        </div>

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
