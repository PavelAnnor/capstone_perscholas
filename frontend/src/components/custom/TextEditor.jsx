import { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "react-quill-new/dist/quill.snow.css";
import SectionWrapper from "../custom/SectionWrapper.jsx"
import UserContext from "../../context/userContext.jsx";
import { Button } from "../ui/button.jsx";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { createNotes } from "../../util/database.js";


export default function TextEditor({mediaId, value = ""}) {

        const { user } = useContext(UserContext);
        const contentRef = useRef(null);
        const titleRef = useRef(null)

 async function handleCreate() {
   console.log(contentRef.current.value);
   if(titleRef.current.value==="")
    alert("Please Add a Title")
   const data = {
     userId: user._id,
     mangaDexId: mediaId,
     title: titleRef.current.value,
     content:contentRef.current.value
   };
   const response = await createNotes(data)

   console.log(response)
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
                ref = {titleRef}
              ></input>
              <ReactQuill theme="snow" ref={contentRef} />
              <div className="flex">
                {value === "" && (
                  <Button size="lg" className="mt-5" onClick={handleCreate}>
                    Crate New
                  </Button>
                )}

                {value !== "" && (
                  <Button size="lg" className="mt-5">
                    Save
                  </Button>
                )}
              </div>
            </div>
          </section>

          <section className="w-2/10 border-green-600 border-2">
            <p className="p-3 text-2xl bg-[blue] border-2 mb-2">Saved Notes</p>
          </section>
        </main>
      </SectionWrapper>
    );
}
