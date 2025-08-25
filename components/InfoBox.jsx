"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Home, LogIn, LogOut, User } from "lucide-react";
import Link from "next/link";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button className="border text-white px-4 py-2 rounded-sm font-bold flex items-center gap-2">
        {session?.user?.name || "User"}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 w-48 bg-white border rounded shadow-lg z-10">
          {session ? (
            <Link
              href="/user/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Home /> Dashboard
            </Link>
          ) : (
            <Link
              href="/signup"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <User /> Create Account
            </Link>
          )}

          {session ? (
            <button
              onClick={() => signOut()}
              className="w-full text-left flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
            >
              <LogOut /> <span>Log Out</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="w-full text-left flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
            >
              <LogIn /> <span>Log In</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
