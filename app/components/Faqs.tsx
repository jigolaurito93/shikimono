"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GoPackage } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { CiRuler, CiStar, CiHeart } from "react-icons/ci";
import { IoIosCheckboxOutline } from "react-icons/io";
import Link from "next/link";

const Faqs = () => {
  const [dropdownOpen, setDropdownOpen] = useState<Set<number>>(new Set());

  const toggleDropdown = (index: number) => {
    setDropdownOpen(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqItems = [
    {
      icon: <GoPackage className="text-2xl" />,
      title: "Packaging",
      content:
        "Shikimono Comfort Mats are folded and vacuum sealed for easy shipping to your doorstep. It is normal to see creases and may appear thin when opened. Allow 3to7 days until it goes back to its original fluffy self.",
    },
    {
      icon: <TbArrowBackUp className="text-2xl" />,
      title: "Returns",
      content:
        "Please note that all sales are FINAL—we do not offer returns or refunds. However, in the unlikely event that you receive a defective or damaged item, we will gladly provide a replacement at no additional cost.",
      returnLink: "To know more, please read our Return & Replacement Policy.",
    },
    {
      icon: <CiRuler className="text-2xl" />,
      title: "Mat sizes",
      content:
        "Our mats come in multiple sizes to fit your space — from small (90x150cm) to extra-large (200x300cm).",
    },
    {
      icon: <CiStar className="text-2xl" />,
      title: "Material",
      content:
        "Made from premium Japanese memory foam with a soft suede surface that is both durable and easy to clean.",
    },
    {
      icon: <CiHeart className="text-2xl" />,
      title: "Available Colors",
      content:
        "Choose from a range of neutral tones — Beige, Charcoal, Clay, and Mist Blue — to complement any home interior.",
    },
    {
      icon: <IoIosCheckboxOutline className="text-2xl" />,
      title: "More questions?",
      content:
        "Send us a message on Instagram @shikimono.ph or email hello@shikimono.com — wed love to help!",
    },
  ];

  return (
    <div className="py-12 md:py-12 lg:py-10 lg:px-12">
      <div className="w-full text-center text-xs py-4 font-m-plus-1">
        KNOW MORE ABOUT OUR PRODUCTS
      </div>
      <div className="w-full text-center text-4xl py-2 font-m-plus-1">
        FAQ&apos;s
      </div>

      <div className="flex w-full justify-center font-m-plus-1 gap-2 py-4 relative">
        {/* LEFT SIDE (FAQ List) */}
        <div className="w-[600px] flex flex-col">
          {faqItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between p-4 hover:bg-gray-100 cursor-pointer items-center"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <div className="hover:underline">{item.title}</div>
                </div>
                <MdOutlineKeyboardArrowDown
                  className={`text-2xl transition-transform duration-300 ${dropdownOpen.has(index) ? "rotate-180" : ""
                    }`}
                />
              </div>

              {dropdownOpen.has(index) && (
                <div className="px-8 py-2 flex flex-col gap-4 text-gray-500 text-sm transition-all duration-300">
                  <div>{item.content}</div>
                  <Link
                    className="underline hover:underline-offset-2 text-xs"
                    href={
                      "https://shikimonomnl.myshopify.com/pages/return-replacement-policy"
                    }
                  >
                    {item.returnLink}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (IMAGE) - Fixed position */}
        <div className="hidden lg:flex w-[500px] h-[500px] flex-shrink-0">
          <Image
            src="/prod3.png"
            alt="faq1"
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
