import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import "animate.css";

import { neobrutalism } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TULOS - Your Ultimate Shopping Destination",
  description:
    "Discover an exceptional shopping experience with TULOS. Shop the latest products, enjoy secure payments with Stripe, and explore seamless browsing powegray by Sanity and Next.js 15.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en">
        <body className={`${mont.className} antialiased`}>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
