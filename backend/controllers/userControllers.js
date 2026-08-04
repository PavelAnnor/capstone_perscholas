import mongoose from "mongoose";


import UserModel from "../models/userModel.js"

//Test method to make sure I can communicate with Database, gets all users stored in DB
async function getAllUsers(req,res){

    try {
        
        const response = await UserModel.find({})
        res.send(response)
    } catch (error) {

        console.log(error)
        res.send("Unable to get All Users")
        
    }

}

//Gets a specific user's info from the Database
async function getUser (req,res) {

    try {
        
    } catch (error) {
        
    }
    
}



//Function to create a user in the database
async function createUser(req,res) {

    try {
    const result = await UserModel.create(req.body);
  
    //if user was made correclty, send an object jack with the data for that user, including the _id
    res.status(200).send(result);
        
    } catch (error) {

        //if the user is unable to be created, return a status code of 400 and false
        res.status(400).send(false)
        
    }
    
}


export { getAllUsers, createUser };