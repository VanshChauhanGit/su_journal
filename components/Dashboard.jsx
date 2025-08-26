"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [papers, setPapers] = useState([]);
  console.log(papers);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/papers?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setPapers(data.papers);
          }
        });
    }
  }, [session]);

  return (
    <div className="flex min-h-screen bg-white shadow-md rounded-lg border p-6">
      {/* Main Content */}
      <main className="flex-1">
        <h2 className="text-xl font-semibold text-teal-700">
          Submitted Papers List
        </h2>
        <hr className="border-t border-teal-700 my-2" />
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-4 py-2 text-left">S.No</th>
                {/* <th className="px-4 py-2 text-left">Paper ID</th> */}
                <th className="px-4 py-2 text-left">Paper Title</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {papers.length > 0 ? (
                papers.map((paper, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    {/* <td className="px-4 py-2">{paper.id}</td> */}
                    <td className="px-4 py-2">{paper.paperTitle}</td>
                    <td className="px-4 py-2">
                      {new Date(paper.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-2 ">{paper.category}</td>
                    {/* <td className="px-4 py-2">{paper.status}</td> */}
                    <td className="px-4 py-2">
                      <button
                        onClick={() => window.open(paper.fileUrl, "_blank")}
                        className="px-3 py-1 text-sm text-white bg-teal-600 rounded hover:bg-teal-700"
                      >
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
