"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import UserSidebar from "./UserSidebar";

function ContentLayout({ children }) {
  const pathname = usePathname();

  const isUserRoute = pathname.startsWith("/user");
  return (
    <>
      <Header />
      <main className="flex flex-1 max-w-7xl mx-auto px-4 py-4 gap-4">
        {isUserRoute && (
          <div className="w-80 shrink-0">
            <UserSidebar />
          </div>
        )}
        <div className="flex-1">{children}</div>

        {!isUserRoute && (
          <div className="w-80 shrink-0">
            <Sidebar />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ContentLayout;
