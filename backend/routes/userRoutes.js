import express from "express"


import {getAllUsers,createUser} from "../controllers/userControllers.js"


const router = express.Router()


router.route("/").get(getAllUsers).post(createUser)



export default router