import React from "react";
import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
      {/* Regular Price */}
      <PriceFormatter
        amount={price}
        className={cn(
          "text-lg sm:text-xl font-semibold text-darkColor",
          className
        )}
      />

      {/* Discount Price */}
      {price && discount && (
        <div className="flex items-center gap-2">
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className={cn(
              "text-sm sm:text-lg font-medium text-red-500 line-through",
              className
            )}
          />
          <span className="text-xs sm:text-sm md:text-base text-green-500 font-semibold">
            {discount}% OFF
          </span>
        </div>
      )}
    </div>
  );
};

export default PriceView;
