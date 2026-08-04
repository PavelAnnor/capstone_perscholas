import express from "express"
import cors from "cors"
import connectDB from "./conn.js";

import mongoose from "mongoose";


//importing models
import UserModel from "./models/userModel.js"

const app = express()
const PORT = process.env.PORT || 3000;


const allowedOrigins = ["http://localhost:5173"];
app.use(express.json());


app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.get("/", async (req,res)=>{
  const response = await UserModel.find({})
  res.send(response)
})


app.listen(PORT,()=>{
    console.log("Server is runnng...")
    connectDB();
})