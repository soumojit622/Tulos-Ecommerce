import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { Input } from "./ui/input";
import { categoriesData, quickLinksData } from "@/constants";
import Link from "next/link";
import FooterTop from "./FooterTop";
import SocialMedia from "./SocialMedia";
import Image from "next/image"; // Import Image from next/image

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Define app version (can be set from package.json or environment variables)
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"; // Default to 1.0.0 if not set in env

  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon.png" // Replace with the actual path to your logo image
                alt="TULOS Logo"
                width={32} // Set a fixed width
                height={32} // Set a fixed height
                className="object-contain" // Ensure the logo scales properly
              />
              <Logo>TULOS</Logo>
            </div>
            <p className="text-gray-600 text-sm">
              At TULOS, we believe in empowering your style with premium quality
              clothing and accessories. Shop with confidence and discover a
              collection that suits your unique personality.
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinksData?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
              {categoriesData?.map((item) => (
                <Link
                  key={item?.title}
                  href={`/category${item?.href}`}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Be the first to know about new arrivals, exclusive offers, and
              special events. Subscribe now and never miss an update from TULOS!
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-darkColor text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-2 mt-2 text-center text-gray-600 text-sm">
          <p>Version {appVersion}</p>
          <p>&copy; {currentYear} TULOS. All rights reserved.</p>
        </div>
      </Container>
      {/* Made with love by Soumojit Banerjee */}
      <div className="text-center py-4 text-gray-600 text-sm animate__animated animate__fadeIn animate__delay-2s">
        <p>
          Made with <span className="heartbeat-animation">❤️</span> by{" "}
          <span className="font-semibold">Soumojit Banerjee</span>
        </p>
      </div>
      {/* Add a gap behind the footer bottom */}
      <div className="h-8 bg-white"></div>{" "}
      {/* This adds a gap below the footer */}
    </footer>
  );
};

export default Footer;
