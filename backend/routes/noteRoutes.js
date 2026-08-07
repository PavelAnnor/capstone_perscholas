import express from "express"
import { createNote,deleteNote,editNote,getAllNotes,deleteAllNotes } from "../controllers/notesControllers.js"

const router = express.Router()


router.route("/").post(createNote).delete(deleteNote).patch(editNote)



router.route("/get-all-notes").post(getAllNotes)

router.route("/delete-all-user-notes").delete(deleteAllNotes)



export default router