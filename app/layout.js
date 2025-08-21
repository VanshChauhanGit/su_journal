import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shobhit Meerut - NICE Journal of Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-50`}
      >
        <Header />
        <main className="flex flex-1 max-w-7xl mx-auto px-2 py-4 gap-4 ">
          <div className="flex-1">{children}</div>

          <div className="w-80 shrink-0">
            <Sidebar />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
