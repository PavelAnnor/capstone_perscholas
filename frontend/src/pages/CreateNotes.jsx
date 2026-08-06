
import SectionWrapper from "../components/custom/SectionWrapper";
import UserContext from "../context/userContext";
import { useState,useRef,useContext,useEffect } from "react";
import {useParams,useNavigate} from "react-router"
import { Button } from "../components/ui/button.jsx";


import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.snow.css";


export default function CreateNotes(){


    const navigate = useNavigate()

   



    const {user} = useContext(UserContext)
    const containerRef = useRef(null);
   

    const params = useParams()



    //if user isnt logged in redirect to hoempage
     useEffect(()=>{
        if(!user){
            navigate("/", { replace: true })
        }
    },[])

    const managaDexId = params.mangaDexId;


   
    function handleSubmit(){
        console.log(containerRef.current.value)
    }
    


    return (
      <SectionWrapper>
        <main>
          <div className="w-full  mb-5">
            <p className="p-3 text-4xl bg-[blue] border-2 mb-2">Edit</p>
            <Button size="lg" className="" onClick = {handleSubmit}>Save</Button>
          </div>

          <ReactQuill theme="snow"   ref={containerRef}/>
        </main>
      </SectionWrapper>
    );

}