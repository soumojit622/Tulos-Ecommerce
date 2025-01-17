import React, { FC } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import {
  X,
  Home,
  Settings,
  HelpCircle,
  Laptop,
  Book,
  DollarSign,
  Tv,
  Scissors,
  Volleyball,
} from "lucide-react"; // Importing relevant icons
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image"; // Keep the import for Image

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "-100%" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-y-0 left-0 z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-xl cursor-auto w-full`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black/90 text-white/80 h-full p-10 border-r border-r-gray-700 flex flex-col gap-6"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <button onClick={onClose} className="flex items-center">
            {/* Logo Image */}
            <Image
              src="/favicon.png"
              alt="Logo"
              className="mr-2"
              width={32} // Set appropriate width
              height={32} // Set appropriate height
            />
            <Logo className="text-white text-xl">Tulos</Logo>
          </button>
          <button
            className="hover:text-red-500 transition duration-200"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        {/* Categories */}
        <div className="mt-6">
          <h3 className="text-white font-semibold mb-3 border-b border-gray-600 pb-2">
            Categories
          </h3>
          <div className="flex flex-col gap-3">
            {[
              {
                href: "/category/tech",
                label: "Technology",
                icon: <Laptop size={20} />,
              },
              {
                href: "/category/education",
                label: "Education",
                icon: <Book size={20} />,
              },
              {
                href: "/category/finance",
                label: "Finance",
                icon: <DollarSign size={20} />,
              },
              {
                href: "/category/entertainment",
                label: "Entertainment",
                icon: <Tv size={20} />,
              },
              {
                href: "/category/sports",
                label: "Sports",
                icon: <Volleyball size={20} />,
              },
              {
                href: "/category/fashion",
                label: "Fashion",
                icon: <Scissors size={20} />,
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 hover:text-white transition-transform transform hover:scale-105 hover:shadow-md"
                onClick={onClose} // Close sidebar when a category is clicked
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-700 my-6"></div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {[
              {
                href: "/dashboard",
                label: "Dashboard",
                icon: <Home size={18} />,
              },
              {
                href: "/settings",
                label: "Settings",
                icon: <Settings size={18} />,
              },
              { href: "/help", label: "Help", icon: <HelpCircle size={18} /> },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 hover:text-white transition-transform transform hover:scale-105 hover:shadow-md"
                title={item.label}
                onClick={onClose} // Close sidebar when a quick link is clicked
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-700 my-6"></div>

        {/* Social Media Links */}
        <div className="mt-auto">
          <SocialMedia />
        </div>

        {/* Footer */}
        <div className="mt-6 text-xs text-white/60 text-center">
          <p className="text-sm">App Version 1.0.0</p>
          <p className="mt-2">
            © {new Date().getFullYear()} TULOS. All rights reserved.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
