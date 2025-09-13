import dbConnect from "@/lib/mongoose";
import Volume from "@/models/Volume";
import Issue from "@/models/Issue";
import Paper from "@/models/Paper";

export async function GET() {
  await dbConnect();

  const volumes = await Volume.find().populate({
    path: "issues",
    populate: { path: "papers" },
  });

  return new Response(JSON.stringify(volumes), { status: 200 });
}
