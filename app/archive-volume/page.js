"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import Loader from "@/components/Loader";

export default function VolumesPage() {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/volumes")
      .then((res) => res.json())
      .then((data) => setVolumes(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      <h2 className="text-teal-700 text-2xl font-bold">Archive Volume</h2>
      <hr className="border-t border-teal-700 my-2" />

      <div className="w-full max-w-4xl mx-auto my-8 font-sans">
        <div className="border border-gray-200 shadow-md">
          {/* Header */}
          <div className="bg-gray-100 px-4 py-3 text-center font-bold text-lg text-gray-700 border-b border-gray-200">
            VOLUMES
          </div>

          {!loading ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {volumes.map((v) => (
                    <tr
                      key={v._id}
                      className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {/* Volume Cell */}
                      <td className="p-4 w-1/6 bg-gray-50 text-center font-bold align-center">
                        Volume-{v.volumeNumber}
                      </td>

                      {/* Year Cell */}
                      <td className="p-4 w-[10%] text-center align-center text-gray-600s border-x">
                        {v.year}
                      </td>

                      <td className="w-auto text-gray-700 leading-relaxed pl-2">
                        <ul className="flex-col items-center justify-center">
                          {v.issues.map((i) => (
                            <li key={i._id} className="">
                              <Link
                                href={`/volume/${v.volumeNumber}/issue/${i.issueNumber}`}
                                className="text-blue-600 hover:underline"
                              >
                                Issue-{i.issueNumber} ({i.period})
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Loader />
          )}

          {!loading && volumes.length === 0 && (
            <p className="text-center text-gray-500 text-xl py-2">
              No volumes found.
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
