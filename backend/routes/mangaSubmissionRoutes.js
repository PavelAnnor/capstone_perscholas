import express from "express"
import { createSubmission } from "../controllers/mangaSubmissionControllers.js"


const router = express.Router()

router.route("/").post(createSubmission)






export default router