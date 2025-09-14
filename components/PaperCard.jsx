import Link from "next/link";
import React, { useState } from "react";

function PaperCard({ paper, volume, issueData }) {
  console.log(paper);
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="border border-gray-300 bg-white p-4 rounded shadow-sm">
      {/* Tags */}
      <div className="flex gap-2 mb-2">
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Open Access
        </span>
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
          Article
        </span>
      </div>

      {/* Title */}
      <Link
        href={`/pdf-paper-view?url=${encodeURIComponent(paper.fileUrl)}`}
        // target="_blank"
      >
        <h2 className="text-blue-700 font-semibold hover:underline">
          {paper.paperTitle}
        </h2>
      </Link>

      {/* Authors */}
      <p className="text-sm text-gray-700 mt-1">
        Author : <span className="font-medium">{paper.authorName}</span>
      </p>
      {paper.additionalAuthors && (
        <p className="text-sm text-gray-700 mt-1">
          Co-Authors :{" "}
          <span className="font-medium">{paper.additionalAuthors}</span>
        </p>
      )}

      {/* Paper Type */}
      <p className="text-sm text-gray-600">{paper.category}</p>

      {/* Volume + Issue + Date */}
      <p className="text-xs text-gray-500">
        Volume-{volume}, Issue-{issueData?.issueNumber}, ({issueData?.period}{" "}
        {issueData?.year})
      </p>

      {/* Links */}
      <div className="flex justify-between mt-3 text-sm">
        <button
          onClick={() => toggleTab("abstract")}
          className={`${
            activeTab === "abstract"
              ? "font-bold text-blue-800"
              : "text-blue-700"
          } hover:cursor-pointer hover:underline`}
        >
          📄 Abstract
        </button>
        <button
          onClick={() => toggleTab("keywords")}
          className={`${
            activeTab === "keywords"
              ? "font-bold text-blue-800"
              : "text-blue-700"
          } hover:underline hover:cursor-pointer`}
        >
          📘 Keywords
        </button>
        <button
          onClick={() => toggleTab("citation")}
          className={`${
            activeTab === "citation"
              ? "font-bold text-blue-800"
              : "text-blue-700"
          } hover:underline hover:cursor-pointer`}
        >
          📝 Citation
        </button>
      </div>

      {/* Dynamic Sections */}

      {activeTab && (
        <div className="mt-4 border-t pt-3 text-sm text-gray-700">
          {activeTab === "abstract" && (
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Abstract</h3>
              <p className="">{paper?.abstract}</p>
            </div>
          )}

          {activeTab === "keywords" && (
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Keywords</h3>
              <p>{paper?.keywords}</p>
            </div>
          )}

          {activeTab === "references" && (
            <div>
              <h3 className="font-bold text-gray-800 mb-1">References</h3>
              <ul className="list-disc ml-5">
                <li>Reference 1: Research Paper A</li>
                <li>Reference 2: Journal Article B</li>
              </ul>
            </div>
          )}

          {activeTab === "citation" && (
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Citation</h3>
              <p>
                {paper?.authorName}, {paper?.additionalAuthors}. "
                {paper?.paperTitle}". {issueData?.period} {issueData?.year}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PaperCard;
