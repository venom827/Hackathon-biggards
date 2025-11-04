import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    hospital: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bloodType: { type: String, required: true },
    urgent: { type: Boolean, default: false },
    date: { type: String },
    location: { type: String },
    status: { type: String, enum: ["open", "accepted", "completed"], default: "open" },
    acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Request", requestSchema);
