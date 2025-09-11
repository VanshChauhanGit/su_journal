import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <aside className="w-full bg-white shadow-md overflow-hidden gap-3 flex flex-col rounded-t-lg">
      {/* Journal Update */}
      <div className="">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-t-lg px-4 py-2 font-bold text-lg">
          Journal Update
        </div>
        <div className="p-4 text-sm text-gray-700">
          Authors can submit the manuscript through the{" "}
          <span className="text-red-600 font-semibold">
            online submission procedure
          </span>
          , available at our website. <br />
          <a href="/login" className="text-blue-600 underline">
            https://su-journal.vercel.app
          </a>
        </div>
      </div>

      {/* Regular Issues Contents */}
      <div>
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-t-lg text-white px-4 py-2 font-bold text-lg mt-2">
          Regular Issues Contents
        </div>
        <div className="p-4 text-sm">
          <ul className="list-disc list-inside space-y-1 text-blue-700 font-medium">
            <li>
              <Link href="/current-issue" className="hover:underline">
                Current Issue
              </Link>
            </li>
            <li>
              <Link href="archive-volume" className="hover:underline">
                Archive Issues
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="hover:underline">
                Best Paper Awards
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Journal Statistics */}
      <div>
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-t-lg px-4 py-2 font-bold text-lg mt-2">
          Journal Statistics
        </div>
        <div className="p-4 text-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="py-1">Citations</td>
                <td className="py-1 font-semibold">8797</td>
              </tr>
              <tr>
                <td className="py-1">h-index</td>
                <td className="py-1 font-semibold">34</td>
              </tr>
              <tr>
                <td className="py-1">i10-index</td>
                <td className="py-1 font-semibold">152</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
