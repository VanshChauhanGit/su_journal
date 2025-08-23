"use client";
import Wrapper from "@/components/Wrapper";
import { editorialBoard } from "@/constants";

function page() {
  return (
    <Wrapper>
      <h2 className="text-teal-700 text-2xl font-bold">Editorial Board</h2>
      <hr className="border-t border-teal-700 my-2" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {editorialBoard.map((profile, index) => (
          <div key={index} className="p-4 text-center bg-gray-100 rounded-md">
            <h3 className="font-bold">{profile.name}</h3>
            <p>{profile.position}</p>
            <p>{profile.institute}</p>
            <p>{profile.location}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default page;
