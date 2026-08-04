import express from "express"


import {getAllUsers,createUser,getUser} from "../controllers/userControllers.js"


const router = express.Router()


router.route("/").post(createUser)
router.route("/login").post(getUser)



export default router