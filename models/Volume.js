import mongoose from "mongoose";

const VolumeSchema = new mongoose.Schema({
  volumeNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  issues: [{ type: mongoose.Schema.Types.ObjectId, ref: "Issue" }],
});

export default mongoose.models.Volume || mongoose.model("Volume", VolumeSchema);
