import dbConnect from "@/lib/mongoose.js";
import Paper from "@/models/Paper.js";
import Issue from "@/models/Issue.js";
import Volume from "@/models/Volume.js";

export async function POST() {
  await dbConnect();

  // Create a paper
  const paper2 = await Paper.create({
    paperTitle: "Effectuation of Web Log Preprocessing...",
    category: "Research Paper",
    authorName: "B. Bakariya",
    email: "author@example.com",
    mobile: "9876543210",
    organization: "Shobhit University",
    country: "India",
    city: "Meerut",
    additionalAuthors: "G.S. Thakur",
    keywords: "Web Usage Mining, Preprocessing, Web Log Data, Clustering",
    abstract: "For accessing the information from web log...",
    fileUrl: "https://res.cloudinary.com/demo/sample.pdf", // Example Cloudinary file
  });

  // Create Issue-1 (Jan-Jun)
  const issue1 = await Issue.create({
    issueNumber: 1,
    period: "Jan-Jun",
    year: 2013,
    papers: [],
  });

  // Create Issue-2 (Jul-Dec)
  const issue2 = await Issue.create({
    issueNumber: 2,
    period: "Jul-Dec",
    year: 2013,
    papers: [paper2._id],
  });

  // Create Volume-1 (2013)
  await Volume.create({
    volumeNumber: 1,
    year: 2013,
    issues: [issue1._id, issue2._id],
  });

  console.log("✅ Data seeded successfully with Paper model!");
  process.exit();
}
