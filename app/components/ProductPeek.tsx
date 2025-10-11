import Image from "next/image";
import React from "react";

interface ProductPeekProps {
  image: string;
  subtitle: string;
  title: string;
  price: string;
  colors: string[];
}

const ProductPeek: React.FC<ProductPeekProps> = ({
  image,
  subtitle,
  title,
  price,
  colors,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="aspect-square w-full object-cover rounded-sm"
      />

      <div className="text-center pt-3">
        <div className="text-sm text-gray-500">{subtitle}</div>
        <div className=" text-lg font-medium">{title}</div>
        <div className="">{price}</div>
      </div>

      <div className="flex justify-center gap-2">
        {colors.map((color, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPeek;
