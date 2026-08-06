import express from "express"
import { createSubmission,deleteMangaPost,getUserSubmissions} from "../controllers/mangaSubmissionControllers.js"


const router = express.Router()

router.route("/").post(createSubmission)

router.route("/getAllMangaPosts").post(getUserSubmissions)

router.route("/deleteMangaPost").delete(deleteMangaPost)






export default router