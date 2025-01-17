import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-sm font-semibold">
      {/* Tab Buttons */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-darkColor px-4 py-2 rounded-full text-gray-700 transition-all duration-300 ease-in-out transform focus:outline-none
            ${
              selectedTab === item?.title
                ? "bg-darkColor text-white shadow-lg"
                : "hover:bg-darkColor hover:text-white hover:shadow-md"
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>

      {/* Repeat Button */}
      <button className="border border-darkColor p-3 rounded-full hover:bg-darkColor hover:text-white hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none">
        <Repeat className="w-6 h-6 text-gray-600 hover:text-white transition-colors duration-300" />
      </button>
    </div>
  );
};

export default HomeTabbar;
