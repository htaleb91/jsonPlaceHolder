
const app = require('./app');
require('dotenv').config();

const connectDB = require('./config/db');

connectDB(); // Initialize database connection

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
















/*const express = require("express");
const mongoose = require("mongoose");

// build the app or server
const app = express();
app.use(express.json());

// connect to mongodb and return a promise
mongoose.connect("mongodb+srv://htaleb91:DRL5I8nBKVNUIxx1@cluster0.cu8sb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
console.log("connected to db suucessfully")
}).catch((e)=>{
console.log("error in connection to db",e)
}) 

// mongodb+srv://htaleb91:DRL5I8nBKVNUIxx1@cluster0.cu8sb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(3001, () => {
  console.log("Starting Server ... the server is listenong on port : 3001");
});*/
