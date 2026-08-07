import mongoose from "mongoose";
import bcryptjs from "bcryptjs"


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





//Function to create a user in the database
async function createUser(req,res) {

    try {

    //object destrucutre to grab thr password
     const { password,username, firstName,lastName,email } = req.body;

     //has the password with a salt of 10 (wtf does that mean look it up later)
    //  const hashedPass = await bcryptjs.hash(password,10)

    const result = await UserModel.create(req.body);
  
    //if user was made correclty, send an object jack with the data for that user, including the _id
    res.status(200).send(result);
        
    } catch (error) {

        //if the user is unable to be created, return a status code of 400 and false
        res.status(400).send(false)
        
    }
    
}

//funtion to get information associated with a user
async function getUser(req,res) {

    try {
        const {email,password} = req.body
        const result  = await UserModel.findOne({email:email, password:password})

        // const isValidPassword = await bcryptjs.compare(password,result.password)

        // if(isValidPassword){
        //     const token = generateUserToken()
        // }
    
        res.status(200).send(result)
        
    } catch (error) {
         res.status(400).send(false);
        
    }
    
}


export { getAllUsers, createUser ,getUser};