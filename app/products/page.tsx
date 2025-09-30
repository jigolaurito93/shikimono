import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductPeek from "../components/ProductPeek";

const Products = () => {
  const productList = [
    {
      image: "/prod1.png",
      subtitle: "Neutral Hues",
      title: "Shikimono Mats (pre-order)",
      price: "From ₱2000.00 PHP",
      colors: ["#000000", "#E63946", "#1D4ED8"], // black, red, blue
    },
    {
      image: "/claytonshot.png",
      subtitle: "Gift Cards",
      title: "Shikimono Gift Cards",
      price: "From ₱500.00 PHP",
      colors: ["#000000", "#6B7280", "#B91C1C"], // black, gray, red
    },
    {
      image: "/prod2.png",
      subtitle: "Light Hues",
      title: "Shikimono Mats (pre-order)",
      price: "From ₱2000.00 PHP",
      colors: ["#D97706", "#92400E", "#FACC15"], // amber, brown, yellow
    },
    {
      image: "/prod3.png",
      subtitle: "Pets Collection",
      title: "Pet Mat",
      price: "From ₱1,450.00 PHP",
      colors: ["#111827", "#374151", "#9CA3AF"], // gray/black tones
    },
    {
      image: "/prod1.png",
      subtitle: "Minimalist",
      title: "Desk Organizer",
      price: "$50",
      colors: ["#111827", "#374151", "#9CA3AF"], // gray/black tones
    },
    {
      image: "/prod1.png",
      subtitle: "Minimalist",
      title: "Desk Organizer",
      price: "$50",
      colors: ["#111827", "#374151", "#9CA3AF"], // gray/black tones
    },
  ];
  return (
    <div className="px-20 pt-10 pb-36">
      <div className="flex justify-between py-12">
        <div className="text-3xl font-semibold">Trending Products</div>
        <div className="text-blue-900 text-lg font-medium flex gap-2 items-center">
          <div className="">See everything</div>
          <FaArrowRightLong />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 px-28">
        {productList.map((p, i) => (
          <ProductPeek key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
