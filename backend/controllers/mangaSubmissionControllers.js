import mongoose from "mongoose";
import MangaSubmissionModel from "../models/mangaSubmissionModel.js";




//function to create a manag submission
async function createSubmission(req, res) {
  try {
    const response = await MangaSubmissionModel.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    console.error(error); // <-- add this
    res.status(400).send({ error: error.message }); // <-- send it back too, temporarily
  }
}


//fucntion to get the manag lirbary for a user
async function getUserSubmissions(req,res){



    try {
        const response = await MangaSubmissionModel.find({
          userId: req.body.userId,
        }).sort({ lastRead: -1 });
        res.status(200).send(response)
        
    } catch (error) {

        res.status(400).send(false);
        
    }

}


//Function that deletes a manga post 
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

//function to find which manga was access tot most recently
async function getLastRead(req,res) {

    try {
        const response =await MangaSubmissionModel
          .find({
            userId: req.body.userId,
          })
          .sort({ lastRead: -1 })
          .limit(1);

           res.status(200).send(response);
       

    } catch (error) {

         res.status(400).send({error:error.message});
        
    }
    
}




export {createSubmission,getUserSubmissions,deleteMangaPost,getLastRead}