"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SearchInput } from "./SearchInput";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo and Title Section */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo1.png"
                  alt="Logo"
                  width={300}
                  height={300}
                />
              </div>

              {/* Title and Subtitle */}
              {/* <div className="flex flex-col">
                <h1 className="text-2xl font-bold leading-tight">
                  International Journal of
                  <br />
                  Computer Sciences and Engineering
                </h1>
                <p className="text-blue-100 text-sm mt-1">
                  Scholarly Peer-Reviewed and fully Open Access Journal
                </p>
                <p className="text-blue-200 text-xs mt-1">
                  <span className="font-semibold">ISSN:</span> 2347-2693
                  (Online)
                </p>
              </div> */}
            </div>

            {/* Search Section */}
            <SearchInput />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <Navbar />

      {/* {isNavSticky && <div className="h-12"></div>} */}
    </header>
  );
}
