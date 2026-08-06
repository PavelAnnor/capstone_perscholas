import express from "express"
import { createNote,getAllNotes } from "../controllers/notesControllers.js"

const router = express.Router()


router.route("/").post(createNote)

router.route("/get-all-notes").post(getAllNotes)



export default router