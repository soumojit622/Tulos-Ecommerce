import { Product } from "@/sanity.types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:text-gray-900 hover:underline transition-all duration-200">
          {product?.name}: Characteristics
        </AccordionTrigger>
        <AccordionContent className="bg-gray-50 p-4 rounded-md shadow-sm">
          <div className="flex flex-col gap-4">
            <p className="flex items-center justify-between text-sm text-gray-700">
              Brand:{" "}
              <span className="font-semibold text-gray-900 tracking-wide">
                Unknown
              </span>
            </p>
            <p className="flex items-center justify-between text-sm text-gray-700">
              Collection:{" "}
              <span className="font-semibold text-gray-900 tracking-wide">
                2024
              </span>
            </p>
            <p className="flex items-center justify-between text-sm text-gray-700">
              Type:{" "}
              <span className="font-semibold text-gray-900 tracking-wide">
                {product?.variant}
              </span>
            </p>
            <p className="flex items-center justify-between text-sm text-gray-700">
              Stock:{" "}
              <span
                className={`font-semibold text-sm ${
                  product?.stock ? "text-green-600" : "text-gray-600"
                } tracking-wide`}
              >
                {product?.stock ? "Available" : "Out of Stock"}
              </span>
            </p>
            <p className="flex items-center justify-between text-sm text-gray-700">
              Intro:{" "}
              <span className="font-semibold text-gray-900 tracking-wide">
                {product?.intro}
              </span>
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
