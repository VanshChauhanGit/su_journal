import mongoose from "mongoose";

const PaperSchema = new mongoose.Schema(
  {
    paperTitle: { type: String, required: true },
    category: { type: String, required: true },
    authorName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    organization: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String },
    additionalAuthors: { type: String },
    keywords: { type: String, required: true },
    abstract: { type: String, required: true },
    fileUrl: { type: String, required: true }, // Cloudinary URL
  },
  { timestamps: true }
);

export default mongoose.models.Paper || mongoose.model("Paper", PaperSchema);
