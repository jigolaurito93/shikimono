import React from "react";
import ProductPeek from "../components/ProductPeek";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Products = () => {
  const productList = [
    {
      image: "/prod1.png",
      subtitle: "Neutral Hues",
      title: "Shikimono Mats",
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
      title: "Shikimono Mats",
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
    <div className="px-6 lg:px-20 pt-10 pb-36">
      <div className="text-3xl font-semibold w-full py-4 md:text-4xl">
        Products
      </div>

      <div className="w-full flex justify-between py-4 md:justify-end md:gap-6">
        <div className="flex items-center gap-2">
          <HiAdjustmentsHorizontal className="text-xl" />
          Sort
        </div>
        <div>4 products</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {productList.map((p, i) => (
          <ProductPeek key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
