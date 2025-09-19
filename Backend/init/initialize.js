// init\initialize.js
import mongoose from "mongoose";
import product from "../module/product.js";
import sampleProducts from "./data.js";

const mongo_url = "mongodb://127.0.0.1:27017/Papertechy";

async function initializeDB() {
  await mongoose.connect(mongo_url); //connects to database
  console.log("✅ Connected to MongoDB");

  await product.deleteMany(); // clears old data
  console.log("🗑️ Old products removed");

  await product.insertMany(sampleProducts); //adding new data to database product table
  console.log("👍 Sample products inserted successfully!");

  mongoose.connection.close();
}

initializeDB();
