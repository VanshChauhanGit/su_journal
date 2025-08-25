"use client";

import { useState } from "react";
import {
  FileText,
  Search,
  Send,
  BookOpen,
  CheckCircle,
  XCircle,
  FileCheck,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [papers] = useState([
    // Example dummy data (you can replace with API data)
    {
      id: "P001",
      title: "AI in Healthcare",
      date: "2025-08-20",
      file: "ai-healthcare.pdf",
      status: "Under Review",
    },
    {
      id: "P002",
      title: "Blockchain for Security",
      date: "2025-08-22",
      file: "blockchain-security.pdf",
      status: "Accepted",
    },
  ]);

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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold border-b">Dashboard</div>
        <nav className="p-4 space-y-2">
          {menu.map((item, index) => (
            <Link
            href={item.href || "#"}
              key={index}
              className="flex items-center w-full gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-teal-100"
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Submitted Papers List
        </h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-4 py-2 text-left">S.No</th>
                <th className="px-4 py-2 text-left">Paper ID</th>
                <th className="px-4 py-2 text-left">Paper Title</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">File</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {papers.length > 0 ? (
                papers.map((paper, index) => (
                  <tr
                    key={paper.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{paper.id}</td>
                    <td className="px-4 py-2">{paper.title}</td>
                    <td className="px-4 py-2">{paper.date}</td>
                    <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                      {paper.file}
                    </td>
                    <td className="px-4 py-2">{paper.status}</td>
                    <td className="px-4 py-2">
                      <button className="px-3 py-1 text-sm text-white bg-teal-600 rounded hover:bg-teal-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-500">
                    No papers submitted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
