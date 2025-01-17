"use client";
import emptyCart from "@/images/emptyCart.png";
import Image from "next/image";
import { motion } from "framer-motion"; // Corrected the import for framer-motion
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full space-y-8 shadow-lg shadow-gray-500/30"
      >
        {/* Cart image animation with smooth bounce effect */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-56 h-56 mx-auto relative"
        >
          <Image src={emptyCart} alt="emptyCart" className="object-contain" />
          <motion.div
            animate={{ x: [0, -15, 15, 0], y: [0, -7, 7, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            className="absolute -top-6 -right-6 bg-gray-500 rounded-full p-3 shadow-xl"
          >
            <ShoppingCart size={26} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Title and description with fade-in effects */}
        <div className="text-center space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Oops, your cart is empty!
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Looks like you haven&apos;t added anything yet. Explore our wide
            range of amazing products and fill up your cart with great items!
          </motion.p>
        </div>

        {/* Start Shopping button with hover animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link
            href={"/"}
            className="block bg-gradient-to-r from-gray-600 to-gray-700 text-center py-3 rounded-full text-lg font-semibold text-white hover:bg-indigo-800 transition-all transform hover:scale-105"
          >
            Start Shopping
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
