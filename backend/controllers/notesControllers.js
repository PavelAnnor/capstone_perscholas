import NotesModel from "../models/notesModel.js";



async function createNote(req,res) {

    try {

        const response = await NotesModel.create(req.body);
        res.status(200).send(response)
        
    } catch (error) {

        res.status(400).send({"error":error.message})
        
    }
    
    
}




async function deleteNote(req,res) {

    try {

        const response = await NotesModel.findOneAndDelete(req.body)
        res.status(200).send(response);
        
    } catch (error) {

         res.status(400).send({ error: error.message });
        
    }
    
}



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


async function getAllNotes(req,res) {

    try {

        const response = await NotesModel.find(req.body) 
        res.status(200).send(response)
        
    } catch (error) {

        res.status(400).send({error:error.message})
        
    }
    
}


export {createNote,getAllNotes,deleteNote,editNote}