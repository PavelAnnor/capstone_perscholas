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


async function createUser(req,res) {

    try {
    const result = await UserModel.create(req.body);
    res.send(result);
        
    } catch (error) {
        
    }
    
}


export { getAllUsers, createUser };