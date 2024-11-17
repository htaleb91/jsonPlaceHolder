require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(
      process.env.MONGO_URI,
      //"mongodb+srv://htaleb91:DRL5I8nBKVNUIxx1@cluster0.cu8sb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
