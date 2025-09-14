import dbConnect from "@/lib/mongoose.js";
import Paper from "@/models/Paper.js";
import Issue from "@/models/Issue.js";
import Volume from "@/models/Volume.js";

export async function GET() {
  try {
    await dbConnect();

    // Find the latest volume (by year or volumeNumber)
    const latestVolume = await Volume.findOne({})
      .sort({ year: -1, volumeNumber: -1 })
      .populate({
        path: "issues",
        populate: { path: "papers" },
      })
      .exec();

    if (!latestVolume) {
      return Response.json({ message: "No volumes found" }, { status: 404 });
    }

    // Get the last issue of that volume (highest issueNumber)
    const lastIssue = latestVolume.issues.sort(
      (a, b) => b.issueNumber - a.issueNumber
    )[0];

    if (!lastIssue) {
      return Response.json(
        { message: "No issues found in latest volume" },
        { status: 404 }
      );
    }

    const issueData = {
      volumeNumber: latestVolume.volumeNumber,
      year: latestVolume.year,
      issueNumber: lastIssue.issueNumber,
      period: lastIssue.period,
      papers: lastIssue.papers,
    };

    return Response.json({ success: true, issueData }, { status: 200 });
  } catch (err) {
    console.error("Error fetching last issue papers:", err);
    return Response.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
