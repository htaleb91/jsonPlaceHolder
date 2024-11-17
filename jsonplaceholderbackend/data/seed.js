const connectDB = require("../config/db");
const mongoose = require("mongoose");
const Post = require("../models/postModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const fs = require("fs");

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Post.deleteMany({});
    await User.deleteMany({});
    await Comment.deleteMany({});

    // Insert sample data
    await processusers();

    await processposts();

    await processcomments();

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error.message);
    process.exit(1);
  }
};
async function processusers() {
  // Step 1: Read user data from user.json file
  const userData = JSON.parse(fs.readFileSync("./users.json", "utf8"));

  // Step 2: Insert users into the database
  const users = [];
  for (let user of userData.users) {
    const newUser = new User({
      name: user.name,
      username: user.username,
      email: user.email,
      street: user.street,
      suite: user.suite,
      city: user.city,
      zipcode: user.zipcode,
      phone: user.phone,
      website: user.website,
    });
    await newUser.save();
    users.push(newUser); // Store users to associate with posts later
  }
}

async function processposts() {
  // Step 1: Read user data from user.json file
  const postData = JSON.parse(fs.readFileSync("./posts.json", "utf8"));
  let users = await User.find();
  // Step 2: Insert users into the database
  const posts = [];
  for (let post of postData.posts) {
    let userId = users[post.userId - 1].id;
    const newPost = new Post({
      title: post.title,
      body: post.body,
      userId: userId,
    });
    await newPost.save();
    posts.push(newPost); // Store users to associate with posts later
  }
}

async function processcomments() {
  // Step 1: Read user data from user.json file
  const commentData = JSON.parse(fs.readFileSync("./comments.json", "utf8"));
  let users = await User.find();
  let posts = await Post.find();
  // Step 2: Insert users into the database
  const comments = [];
  for (let comment of commentData.comments) {
    let userId = users[comment.userId - 1].id;
    let postId = posts[comment.postId - 1].id;
    const newComment = new Comment({
      body: comment.body,
      postId: postId,
      userId: userId,
    });
    await newComment.save();
    comments.push(newComment); // Store users to associate with posts later
  }
}
seedData();
