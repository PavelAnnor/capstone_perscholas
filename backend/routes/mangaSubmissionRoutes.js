import express from "express"
import { createSubmission,getUserSubmissions} from "../controllers/mangaSubmissionControllers.js"


const router = express.Router()

router.route("/").post(createSubmission)

router.route("/getAllMangaPosts").post(getUserSubmissions)






export default router