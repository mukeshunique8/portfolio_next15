import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User's full name
    email: { type: String, required: true, unique: true }, // Email must be unique
    password: { type: String, required: true }, // Hashed password
    profilePicture: { type: String, default: "" }, // Optional profile picture
    role: { type: String, enum: ["admin", "user"], default: "user" }, // Role-based access
    isActive: { type: Boolean, default: true }, // Status of the account
   
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
