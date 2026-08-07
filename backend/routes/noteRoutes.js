import express from "express"
import { createNote,deleteNote,editNote,getAllNotes } from "../controllers/notesControllers.js"

const router = express.Router()


router.route("/").post(createNote).delete(deleteNote).patch(editNote)

router.route("/get-all-notes").post(getAllNotes)



export default router