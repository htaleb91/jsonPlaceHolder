const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true, // ensures email is unique
      match: [
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Please enter a valid email address",
      ], // regex to match email format
    },
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      // match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],regex to match international phone numbers
    },
    website: { type: String, required: true },
  },
  { timestamps: true }
); // Timestamps for createdAt and updatedAt

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
