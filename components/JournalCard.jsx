"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function JournalCard() {
  // const session = await getServerSession();
  const { data: session } = useSession();

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Left Side Image */}
      <div className="md:w-1/3 flex items-center bg-gray-50 justify-center p-2">
        <Image
          src="/images/home-img.jpg"
          alt="Journal Cover"
          width={250}
          height={250}
          className="rounded"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-2/3 p-6">
        <h2 className="text-xl font-bold text-gray-800">Editor-in-Chief</h2>
        <p className="text-gray-700 font-semibold mb-2">Prof. D.P.S. Verma</p>

        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li>
            <span className="font-bold">ISSN:</span> 0973-449X
          </li>
          <li>
            <span className="font-bold">Frequency:</span> Published 2 Times a
            Year
          </li>
          <li>
            <span className="font-bold">Open Access:</span>{" "}
            <span className="text-red-600">Free Accessible for Readers</span>
          </li>
          <li>
            <span className="font-bold">Review Process:</span> Double Blind
            Review by referees
          </li>
          <li>
            <span className="font-bold">Acceptance Time:</span> 2 to 15 weeks,
            based on revision cycles
          </li>
          <li>
            <span className="font-bold">Publication Process:</span> Online
            First, immediately after acceptance
          </li>
          <li>
            <span className="font-bold">Publisher:</span> Shobhit University
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={"/call-for-paper"}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
          >
            Call for Paper
          </Link>
          <Link
            href={session ? "/user/paper-submission" : "/login"}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
          >
            Online Submission
          </Link>
          {/* <Link
            href={"/conferences-show"}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
          >
            Conference Info.
          </Link> */}
        </div>
      </div>
    </div>
  );
}
