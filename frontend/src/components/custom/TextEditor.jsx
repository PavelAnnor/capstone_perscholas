import { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "react-quill-new/dist/quill.snow.css";
import SectionWrapper from "../custom/SectionWrapper.jsx"
import UserContext from "../../context/userContext.jsx";
import { Button } from "../ui/button.jsx";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { createNotes,getNotes } from "../../util/database.js";


export default function TextEditor({mediaId, value = ""}) {

        const { user,notes,setNotes } = useContext(UserContext);
       

        const [notesContent,setNotesContent] = useState({title:"", content:""})


    
    const mappedNotes = notes.map(n=> <p key = {n._id}className="text-center border p-1">{n.title}</p>)
        //when new notes are created send them to the DB
        //and update the state varibale that stores notes
 async function handleCreate() {
   console.log(contentRef.current.value);
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


 function handleTitleChange(e){

    setNotesContent({...notesContent,title:e.target.value})

 }

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
              ></input>
              <ReactQuill theme="snow" 
              onChange={handleContentChange} />
              <div className="flex">
                 
                  <Button size="lg" className="mt-5" onClick={handleCreate}>
                    Create New
                  </Button>
                

               
              </div>
            </div>
          </section>

          <section className="w-2/10 border-green-600 border-2">
            <p className="p-3 text-2xl bg-[blue] border-2 ">Saved Notes</p>
            <div className="w-full  h-[50vh] overflow-y-auto">
              {mappedNotes}
            </div>
          </section>
        </main>
      </SectionWrapper>
    );
}


function NotesItem({data,title,content}){

    const {user} = useContext(UserContext)


    return(

        <p></p>
    )


}
