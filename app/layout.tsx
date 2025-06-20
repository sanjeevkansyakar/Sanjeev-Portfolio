import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ThemeSwitch from "@/Components/ThemeSwitch";

import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";

import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjeev Kansyakar | Portfolio",
  description: "Sanjeev is Next.js full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-mainBG relative dark:bg-darkBlack`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="flex flex-col flex-1 relative">
              <Header />
              {children}
              <Analytics />
              <Footer />
            </div>

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
