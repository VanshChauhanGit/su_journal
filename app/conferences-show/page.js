import JournalCard from "@/components/JournalCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <JournalCard />
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-teal-700">
          Upcoming Conferences
        </h1>
        <hr className="border-t border-teal-700 my-2" />

        <div>
          
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
