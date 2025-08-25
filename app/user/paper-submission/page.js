import PaperSubmissionForm from "@/components/PaperSubmissionForm";
import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700">Paper Submission</h1>
      <hr className="border-t border-teal-700 my-2" />

      <PaperSubmissionForm />
    </Wrapper>
  );
}

export default page;
