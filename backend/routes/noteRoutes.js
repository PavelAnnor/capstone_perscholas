import express from "express"
import { createNote } from "../controllers/notesControllers.js"

const router = express.Router()


router.route("/").post(createNote)



export default router