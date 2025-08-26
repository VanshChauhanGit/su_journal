"use client";
import React from "react";
import {
  FileText,
  Search,
  Send,
  BookOpen,
  CheckCircle,
  XCircle,
  FileCheck,
  Phone,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

function UserSidebar() {
  const menu = [
    { name: "New Submission", icon: Send, href: "/user/paper-submission" },
    { name: "Check Status", icon: Search },
    { name: "Submitted Papers", icon: FileText },
    { name: "Under Reviewing", icon: BookOpen },
    { name: "Accepted Papers", icon: CheckCircle },
    { name: "Rejected Papers", icon: XCircle },
    { name: "Published Papers", icon: FileCheck },
    { name: "Contact Us", icon: Phone },
  ];
  return (
    <aside className=" bg-white shadow-md rounded">
      <div className="p-4 text-xl font-bold border-b">
        <Link href={"/user/dashboard"} className="flex items-center gap-2">
          <LayoutDashboard size={24} />
          Dashboard
        </Link>
      </div>
      <nav className="p-4 space-y-2">
        {menu.map((item, index) => (
          <Link
            href={item.href || "#"}
            key={index}
            className="flex items-center w-full gap-3 px-3 py-2 text-md font-medium text-gray-700 rounded-lg hover:bg-teal-100"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default UserSidebar;
