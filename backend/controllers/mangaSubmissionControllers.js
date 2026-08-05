import mongoose from "mongoose";
import MangaSubmissionModel from "../models/mangaSubmissionModel.js";




async function createSubmission(req,res){


    try {

        const response = await MangaSubmissionModel.create(req.body)
        res.status(200).send(response)
        
    } catch (error) {


        res.status(400).send(false)
        
    }




}



async function getUserSubmissions(req,res){



    try {
        const response = await MangaSubmissionModel.find({
          userId: req.body.userId
        });
        res.status(200).send(response)
        
    } catch (error) {

        res.status(400).send(false);
        
    }

}




export {createSubmission,getUserSubmissions}