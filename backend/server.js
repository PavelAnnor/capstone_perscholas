import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000;


const allowedOrigins = ["http://localhost:5173"];
app.use(express.json());


app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.get("/",(req,res)=>{


    res.send("Hola")



})


app.listen(PORT,()=>{
    console.log("Server is runnng...")
})