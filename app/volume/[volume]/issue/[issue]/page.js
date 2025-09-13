"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "@/components/Wrapper";
import Loader from "@/components/Loader";
import Link from "next/link";
import PaperCard from "@/components/PaperCard";

export default function IssuePage() {
  const { volume, issue } = useParams();
  const [loading, setLoading] = useState(false);
  const [issueData, setIssueData] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/volumes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const v = data.find((x) => x.volumeNumber.toString() === volume);
        const i = v.issues.find((x) => x.issueNumber.toString() === issue);
        setIssueData(i);
      })
      .finally(() => setLoading(false));
  }, [volume, issue]);

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <h2 className="text-teal-700 text-2xl font-bold">
        Volume-{volume}, Issue-{issueData?.issueNumber}, ({issueData?.period}{" "}
        {issueData?.year})
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
            volume={volume}
            issueData={issueData}
          />
        ))}
      </div>
    </Wrapper>
  );
}
