import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const NoProductsAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 min-h-80 space-y-6 text-center bg-gradient-to-r from-gray-50 to-gray-50 shadow-lg rounded-lg w-full mt-10",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/empty.png"
          alt="No Products"
          width={128} // Equivalent to 32px width for the image
          height={128} // Equivalent to 32px height for the image
          className="mx-auto"
        />
      </motion.div>
      <motion.h2
        className="text-3xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        No Products Found
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        It looks like we don&apos;t have any products under{" "}
        <span className="font-semibold text-gray-600">{selectedTab}</span> right
        now.
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex items-center space-x-2 text-gray-600"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="text-base font-medium">
          Restocking soon! Stay tuned.
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-gray-600 max-w-xs"
      >
        Meanwhile, feel free to check out our other categories or contact us for
        more details.
      </motion.p>
      <motion.a
        href="/categories"
        className="px-6 py-2 bg-gray-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-gray-700 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Explore Categories
      </motion.a>
    </div>
  );
};

export default NoProductsAvailable;
