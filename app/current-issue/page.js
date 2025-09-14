"use client";
import Loader from "@/components/Loader";
import PaperCard from "@/components/PaperCard";
import Wrapper from "@/components/Wrapper";
import React, { useEffect, useState } from "react";

function page() {
  const [loading, setLoading] = useState(false);
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/current-issue")
      .then((res) => res.json())
      .then((data) => {
        setIssueData(data.issueData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  return (
    <Wrapper>
      <h2 className="text-teal-700 text-2xl font-bold">
        Volume-{issueData?.volumeNumber}, Issue-{issueData?.issueNumber}, (
        {issueData?.period} {issueData?.year})
      </h2>
      <hr className="border-t border-teal-700 my-2" />
      <div className="space-y-4 mt-4">
        {issueData?.papers?.length === 0 && (
          <div className="text-center text-gray-500 text-xl">
            No papers found in this issue.
          </div>
        )}
        {issueData?.papers?.map((paper) => (
          <PaperCard
            key={paper._id}
            paper={paper}
            volume={issueData?.volumeNumber}
            issueData={issueData}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default page;
