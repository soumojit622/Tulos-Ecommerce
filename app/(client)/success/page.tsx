"use client";

import useCartStore from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const sessionId = searchParams.get("session_id");
  const { resetCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!orderNumber && !sessionId) {
      router.push("/");
    } else {
      resetCart();
    }
  }, [orderNumber, sessionId, resetCart, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl px-6 py-10 sm:px-10 sm:py-12 max-w-xl w-full"
      >
        {/* Checkmark Icon */}
        <motion.div
          className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <Check className="text-white w-10 h-10 sm:w-12 sm:h-12" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center">
          🎉 Order Confirmed!
        </h1>

        {/* Order Details */}
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 bg-white shadow-md rounded-lg p-6 sm:p-8 text-center sm:text-left">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            🎉{" "}
            <span className="font-semibold">
              Thank you for your purchase!&#39;
            </span>{" "}
            Your order is being processed and will be shipped soon. A
            confirmation email with your order details is on its way.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 sm:p-5">
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-semibold text-gray-900">Order Number:</span>{" "}
              <span className="text-blue-600 font-extrabold text-lg sm:text-xl">
                {orderNumber}
              </span>
            </p>
          </div>
        </div>

        {/* What's Next Section */}
        <motion.div
          className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-semibold text-gray-800 mb-2 sm:mb-4 text-base sm:text-lg">
            🛍️ What's Next?
          </h2>
          <ul className="text-gray-700 text-xs sm:text-sm space-y-2">
            <li>✔ Check your email for the order confirmation.</li>
            <li>✔ We'll notify you when your order ships.</li>
            <li>✔ Track your order status anytime.</li>
          </ul>
        </motion.div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 sm:py-4 font-semibold text-white rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-md"
          >
            <Home className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link
            href="/orders"
            className="flex items-center justify-center px-4 py-3 sm:py-4 font-semibold text-white rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-md"
          >
            <Package className="w-5 h-5 mr-2" />
            Orders
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 sm:py-4 font-semibold text-white rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
