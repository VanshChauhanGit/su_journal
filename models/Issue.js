import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema({
  issueNumber: { type: Number, enum: [1, 2], required: true },
  period: { type: String, enum: ["Jan-Jun", "Jul-Dec"], required: true },
  year: { type: Number, required: true },
  papers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Paper" }],
});

export default mongoose.models.Issue || mongoose.model("Issue", IssueSchema);
