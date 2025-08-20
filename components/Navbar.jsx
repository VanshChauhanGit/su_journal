"use client";

import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const [isNavSticky, setIsNavSticky] = useState(false);
  const [navOffsetTop, setNavOffsetTop] = useState(0);
  const navRef = useRef(null); // Create a ref for the navigation

  useEffect(() => {
    const calculateNavOffset = () => {
      if (navRef.current) {
        setNavOffsetTop(navRef.current.offsetTop);
      }
    };

    calculateNavOffset();
    window.addEventListener("resize", calculateNavOffset);

    const handleScroll = () => {
      setIsNavSticky(window.scrollY >= navOffsetTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateNavOffset);
    };
  }, [navOffsetTop]);

  return (
    <nav
      ref={navRef}
      className={`bg-gradient-to-r from-teal-600 to-blue-700 text-white transition-all duration-300 ${
        isNavSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : "relative"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center h-14 justify-between">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <div key={i} className="h-full relative group">
                <Link
                  href={item.href}
                  prefetch
                  variant="ghost"
                  className={`text-white px-3 h-full flex items-center rounded-none font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500  text-white hover:text-black"
                      : "text-white hover:bg-white/20 hover:text-black "
                  }`}
                >
                  {/* {item.icon && <item.icon className="w-4 h-4 mr-2" />} */}
                  <span>{item.label}</span>
                  {item.dropdown && <span className="ml-1">▼</span>}
                </Link>

                {item.dropdown && (
                  <div className="absolute left-0 mt-0 hidden group-hover:block w-56 bg-blue-600 shadow-lg rounded-b-md z-50">
                    <ul className="flex flex-col">
                      {item.dropdown.map((subItem, j) => {
                        const isSubActive = pathname === subItem.href;
                        return (
                          <li key={j}>
                            <Link
                              href={subItem.href}
                              className={`block px-4 py-2 transition-colors duration-200 border font-semibold ${
                                isSubActive
                                  ? "bg-cyan-500 text-white"
                                  : "text-white hover:bg-white/10 hover:text-black"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
