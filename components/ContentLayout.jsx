"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import UserSidebar from "./UserSidebar";

function ContentLayout({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch by not rendering until mounted
    return null;
  }

  const isUserRoute = pathname.startsWith("/user");
  const isPdfViewRoute = pathname.startsWith("/pdf-paper-view");
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

        {!isUserRoute && !isPdfViewRoute && (
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
