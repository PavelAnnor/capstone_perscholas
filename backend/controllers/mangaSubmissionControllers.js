import mongoose from "mongoose";
import MangaSubmissionModel from "../models/mangaSubmissionModel.js";




async function createSubmission(req, res) {
  try {
    const response = await MangaSubmissionModel.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    console.error(error); // <-- add this
    res.status(400).send({ error: error.message }); // <-- send it back too, temporarily
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

async function deleteMangaPost(req,res) {

    try {
        const response = await MangaSubmissionModel.findOneAndDelete({
          userId: req.body.userId,
          mangaDexId: req.body.mangaDexId
        });
         res.status(200).send(response);
        
    } catch (error) {

         res.status(400).send(false);
        
    }
    
}




export {createSubmission,getUserSubmissions,deleteMangaPost}