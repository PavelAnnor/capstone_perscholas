
import SectionWrapper from "../components/custom/SectionWrapper";
import UserContext from "../context/userContext";
import { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Button } from "../components/ui/button.jsx";


import TextEditor from "../components/custom/TextEditor.jsx";

import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.snow.css";


export default function CreateNotes(){


    const navigate = useNavigate()

   



    const {user} = useContext(UserContext)
   
   

    const params = useParams()



    //if user isnt logged in redirect to hoempage
     useEffect(()=>{
        if(!user){
            navigate("/", { replace: true })
        }
    },[])

    //pass the text editor the manga dex ID which it will need to send a post request 
    //to the notes collection
    const managaDexId = params.mangaDexId;


   
   
    


    return (
      <TextEditor mediaId={managaDexId}></TextEditor>
    );

}