import express from "express"
import { createNote,deleteNote,getAllNotes } from "../controllers/notesControllers.js"

const router = express.Router()


router.route("/").post(createNote).delete(deleteNote)

router.route("/get-all-notes").post(getAllNotes)



export default router