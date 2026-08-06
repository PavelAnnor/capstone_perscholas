import express from "express"
import { createSubmission,deleteMangaPost,getUserSubmissions,getLastRead} from "../controllers/mangaSubmissionControllers.js"


const router = express.Router()

router.route("/").post(createSubmission)

router.route("/get-last-read").post(getLastRead)

router.route("/getAllMangaPosts").post(getUserSubmissions)

router.route("/deleteMangaPost").delete(deleteMangaPost)






export default router