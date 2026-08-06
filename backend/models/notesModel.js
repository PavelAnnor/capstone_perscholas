import mongoose from "mongoose"


const noteSchema = mongoose.Schema({

  userId: {
    type: String,
    required: true,
  },
  mangaDexId: {
    type: String,
    required: true,
  },
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    default:"<p></p>"
  }
});





const NotesModel = mongoose.model("notes",noteSchema,"notes")
export default NotesModel