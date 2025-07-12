import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true }, // Array of technologies
    githubLink: { type: String, required: true },
    liveDemo: { type: String, required: true },
    imageUrl: { type: String, required: true },  // Image path
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdAt: { type: Date, required: true },
    activeStatus: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
