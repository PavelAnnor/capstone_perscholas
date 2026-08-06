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
    
}



async function editNote(params) {
    
}


export {createNote}