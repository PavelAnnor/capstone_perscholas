import { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "react-quill-new/dist/quill.snow.css";
import SectionWrapper from "../custom/SectionWrapper.jsx"
import UserContext from "../../context/userContext.jsx";
import { Button } from "../ui/button.jsx";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { createNotes,getNotes } from "../../util/database.js";



export default function TextEditor({mediaId}) {

        const { user,notes,setNotes } = useContext(UserContext);
       

        const [notesContent,setNotesContent] = useState({title:"", content:"",new:true})


    
    const mappedNotes = notes.map(n=> <NotesItem data = {n} setContent={setNotesContent}></NotesItem>)
        //when new notes are created send them to the DB
        //and update the state varibale that stores notes
 async function handleCreate() {
   
   if(notesContent.title===""){
     alert("Please Add a Title");
     return
   }
   const data = {
     userId: user._id,
     mangaDexId: mediaId,
     title: notesContent.title,
     content: notesContent.content,
   };
   const response = await createNotes(data)

   const newNotes = await getNotes({userId:user._id})
   setNotes(newNotes)

   console.log(response)
   console.log(newNotes)
 }


 //makes patch request, updating the notes instead of creating a new one
 async function handleSave() {
    
 }


 function handleTitleChange(e){

    setNotesContent({...notesContent,title:e.target.value})

 }

 //React quill has a special function for on change with special paramters 
 function handleContentChange(content, delta, source, editor) {
   setNotesContent({...notesContent,content:content})
 }

    return (
      <SectionWrapper>
        <main className="flex gap-3">
          <section className="w-8/10 ">
            <div className="w-full  mb-5">
              <p className="p-3 text-2xl bg-[blue] border-2 mb-5">Edit</p>
              <input
                type="text"
                className="w-full mb-5 p-3"
                placeholder="Title"
                onChange={handleTitleChange}
                value={notesContent.title}
              ></input>
              <ReactQuill
                theme="snow"
                onChange={handleContentChange}
                value={notesContent.content}
              />
              <div className="flex">
                {notesContent.new && (
                  <Button size="lg" className="mt-5" onClick={handleCreate}>
                    Create New
                  </Button>
                )}
                {!notesContent.new && (
                  <Button size="lg" className="mt-5" onClick={handleSave}>
                    Save Changes
                  </Button>
                )}
                {!notesContent.new && (
                  <Button size="lg" className="mt-5" onClick={handleSave}>
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </section>

          <section className="w-2/10 border-green-600 border-2">
            <p className="p-3 text-2xl bg-[blue] border-2 ">Saved Notes</p>
            <div className="w-full  h-[50vh] overflow-y-auto">
              {notes.length != 0 && (
                <div className="text-center border p-2 bg-blue-400">
                  <p>Create New</p>
                </div>
              )}

              {mappedNotes}
            </div>
          </section>
        </main>
      </SectionWrapper>
    );
}


function NotesItem({data,setContent}){

    const {user} = useContext(UserContext)

    // a fucntion to se the current contents of the text editor to the contents of the notes item you clicked on
     function handleClick(){

        console.log("hello")

        setContent({title:data.title,content:data.content,new:false})
        
     }

    return (
      <div className="text-center border p-2" onClick={handleClick} >
        <p>{data.title}</p>
      </div>
    );


}
