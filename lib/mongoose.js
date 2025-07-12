import mongoose from "mongoose";

const uri = process.env.MONGODB_URI; 
console.log('MongoDB URI:', uri); // Add this line to check the URI

let isConnected = false; 

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(uri);
    isConnected = !!db.connections[0].readyState;
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to database");
  }
};

export default connectToDatabase;

