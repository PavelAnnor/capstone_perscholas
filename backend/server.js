//Importing important modules and functions
import express from "express"
import cors from "cors"
import connectDB from "./conn.js";
import mongoose from "mongoose";


//importing models
import UserModel from "./models/userModel.js"

//Importing Routes
import userRoutes from "./routes/userRoutes.js"
import mangaSubmissionRoutes from "./routes/mangaSubmissionRoutes.js"

const app = express()
const PORT = process.env.PORT || 3000;


const allowedOrigins = ["http://localhost:5173"];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use((req, res, next) => {
  console.log(`Getting a ${req.method} request from ${req.url}`);
  console.log(`The body is `);
  console.log(req.body);
  next();
});

app.use("/users",userRoutes)
app.use("/manga-submission",mangaSubmissionRoutes)




app.listen(PORT,()=>{
    console.log("Server is runnng...")
    connectDB();
})