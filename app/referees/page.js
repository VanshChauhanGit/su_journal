"use client";
import Wrapper from "@/components/Wrapper";
import { referees } from "@/constants";

function page() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700">
        Acknowledgement to Referees
      </h1>

      <ul className="space-y-3 list-disc list-inside p-3">
        {referees.map((prof, index) => (
          <li key={index} className="flex items-center space-x-2 ">
            <span className="text-black font-semibold text-2xl">•</span>
            <p>
              <span className="font-semibold">{prof.name}</span>, {prof.designation}
            </p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default page;
