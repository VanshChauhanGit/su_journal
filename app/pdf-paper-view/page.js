"use client";
import { useSearchParams } from "next/navigation";

export default function PdfPaperViewPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  return (
    <div className="w-full h-screen">
      {url ? (
        <iframe src={url} className="w-full h-full" />
      ) : (
        <p className="text-center mt-10 text-red-500">No PDF URL provided</p>
      )}
    </div>
  );
}
