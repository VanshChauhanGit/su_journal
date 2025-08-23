"use client";
import Wrapper from "@/components/Wrapper";

function page() {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {/* Left Content */}
        <div className="md:w-2/3 text-gray-700">
          <h2 className="text-2xl font-bold text-teal-600 mb-3">Open Access</h2>
          <p className="text-base leading-relaxed">
            This is an open access journal which means that all content is
            freely available without charge to the user or his/her institution.
            Users are allowed to read, download, copy, distribute, print,
            search, or link to the full texts of the articles, or use them for
            any other lawful purpose, without asking prior permission from the
            publisher or the author. This is in accordance with the BOAI
            definition of open access.
          </p>
        </div>

        {/* Right Icon */}
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
          <div className="flex flex-col items-center text-center">
            {/* Teal Open Access Icon */}
            <div className="w-24 h-24 rounded-full border-4 border-teal-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="teal"
                strokeWidth="2"
                className="w-12 h-12"
              >
                <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M7 17V9a5 5 0 1 1 10 0v2" />
                <rect x="6" y="13" width="12" height="8" rx="2" />
              </svg>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-teal-600">
              Open Access
            </h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
