const { MongoClient } = require("mongodb");


const uri = process.env.MONGODB_URI;

async function testConnection() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("portfolio_db");
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections);
    client.close();
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

testConnection();
