import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import useCartStore from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}

const QuantityButtons = ({ product, className }: Props) => {
  const { addItem, getItemCount, removeItem } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity decreased successfully!");
    } else {
      toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 text-base pb-1 transition-all duration-200 ease-in-out",
        className
      )}
    >
      {/* Decrease Quantity Button */}
      <Button
        onClick={handleRemoveProduct}
        disabled={itemCount === 0 || isOutOfStock}
        variant="outline"
        size="icon"
        className={cn(
          "w-10 h-10 flex items-center justify-center text-darkColor hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400 transition-colors duration-150",
          itemCount === 0 || isOutOfStock
            ? "cursor-not-allowed"
            : "cursor-pointer"
        )}
      >
        <Minus className="w-4 h-4" />
      </Button>

      {/* Item Count Display */}
      <span className="font-semibold text-xl text-darkColor text-center">
        {itemCount}
      </span>

      {/* Increase Quantity Button */}
      <Button
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.name?.substring(0, 12)}... added successfully!`
          );
        }}
        variant="outline"
        size="icon"
        className={cn(
          "w-10 h-10 flex items-center justify-center text-darkColor hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400 transition-colors duration-150",
          isOutOfStock ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default QuantityButtons;
