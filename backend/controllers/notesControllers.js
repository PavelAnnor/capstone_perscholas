import NotesModel from "../models/notesModel.js";



//Function to create a document in the notes collection 
async function createNote(req,res) {

    try {

        const response = await NotesModel.create(req.body);
        res.status(200).send(response)
        
    } catch (error) {

        res.status(400).send({"error":error.message})
        
    }
    
    
}



//Function to delte a document in the notes collection 
async function deleteNote(req,res) {

    try {

        const response = await NotesModel.findOneAndDelete(req.body)
        res.status(200).send(response);
        
    } catch (error) {

         res.status(400).send({ error: error.message });
        
    }
    
}

//Function to create delte all documents associated with a specifc user and manga in the notes collection 
//BLOCKER: Doesnt work fully yet, for some reason there is an issue with the mangaDexID when a note component renders
//Not really a HUGE issue, it just leaves some bad data in the database
async function deleteAllNotes(req,res) {


     try {
        const q = {
            userId:req.body.userId,
            mangaDexId:req.body.mangaDexId
        }
       const response = await NotesModel.deleteMany(q);
       res.status(200).send(response);
     } catch (error) {
       res.status(400).send({ error: error.message });
     }

    
}


//fucntion to edit a note document
async function editNote(req,res) {


    try {
            const q = {
              userId: req.body.userId,
              mangaDexId: req.body.mangaDexId,
            };
            const update = {title:req.body.title,content:req.body.content}
         const response = await NotesModel.findOneAndUpdate(q, update,{
           returnDocument: "after",
         });
         res.status(200).send(response);
    } catch (error) {

         res.status(400).send({ error: error.message });
        
    }
    
}

//fucntion to get all notes associated with a user
async function getAllNotes(req,res) {

    try {

        const response = await NotesModel.find(req.body) 
        res.status(200).send(response)
        
    } catch (error) {

        res.status(400).send({error:error.message})
        
    }
    
}


export {createNote,getAllNotes,deleteNote,editNote,deleteAllNotes}