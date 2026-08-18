import express from "express"
import { getManga, getOneManga, getMangaCoverArtFileName } from "../controllers/mangadexAPIControllers.js"

const router = express.Router()


router.route("/search-manga/:title").get((req,res)=>{res.send("Not from ee")})
router.route("/search-one-manga/:id").get(getOneManga)
router.route("/manga-cover-art/:coverId").get(getMangaCoverArtFileName);



export default router