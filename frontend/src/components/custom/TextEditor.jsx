import { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate,Link } from "react-router";
import "react-quill-new/dist/quill.snow.css";
import SectionWrapper from "../custom/SectionWrapper.jsx"
import UserContext from "../../context/userContext.jsx";
import { Button } from "../ui/button.jsx";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";


import { createNotes,deleteNote,getNotes,editNote } from "../../util/database.js";




export default function TextEditor({ mediaId }) {
  const titleRef = useRef();

  const url = `/create-notes/${mediaId}`;

  useEffect(() => {
    async function getNotesData() {
      const newNotes = await getNotes({ userId: user._id });
      setNotes(newNotes);
    }
    getNotesData();
  }, []);

  const { user, notes, setNotes } = useContext(UserContext);

  const [notesContent, setNotesContent] = useState({
    title: "",
    content: "",
    new: true,
  });

  // sync the ref whenever title changes from outside typing
  // (selecting a note, resetting to a blank doc)
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.value = notesContent.title;
    }
  }, [notesContent.title]);

  const filteredNotes = notes.filter((n) => n.mangaDexId === mediaId);
  
  const mappedNotes = filteredNotes.map((n) => (
    <NotesItem data={n} key={n._id} setContent={setNotesContent}></NotesItem>
  ));
  //when new notes are created send them to the DB
  //and update the state varibale that stores notes
  async function handleCreate() {

     const title = titleRef.current.value;
    if (title === "") {
      alert("Please Add a Title");
      return;
    }
    const x = notesContent.content;
    const data = {
      userId: user._id,
      mangaDexId: mediaId,
      title: title,
      content: notesContent.content,
    };
    const response = await createNotes(data);

    const newNotes = await getNotes({ userId: user._id });
    setNotes(newNotes);
  }

  //makes patch request, updating the notes instead of creating a new one
  async function handleSave() {
   
    const data = {
      userId: user._id,
      mangaDexId: mediaId,
      title: titleRef.current.value,
      content: notesContent.content,
    };
    console.log(data);
    const response = await editNote(data);
    console.log(response);
    const newNotes = await getNotes({ userId: user._id });
    setNotes(newNotes);
  }

  async function handleDelete() {
    try {
      const response = await deleteNote({
        userId: user._id,
        mangaDexId: mediaId,
      });
      const newNotes = await getNotes({ userId: user._id });
      setNotes(newNotes);
      setNotesContent({ title: "", content: "", new: true });
    } catch (error) {}
  }

  function handleTitleChange(e) {
    setNotesContent({ ...notesContent, title: e.target.value });
  }

  //React quill has a special function for on change with special paramters
  function handleContentChange(content, delta, source, editor) {
    setNotesContent({ ...notesContent, content: content });
  }

  return (
    <SectionWrapper>
      <main className="flex gap-3">
        <section className="w-7/10 ">
          <div className="w-full  mb-5">
            <p className="p-3 text-3xl bg-[blue] border-2 mb-5 h-[20vh] flex items-center">
              Edit
            </p>

            <p>Title</p>
            <input
              className="w-full mb-10 border-2 p-3"
              ref={titleRef}
              defaultValue={notesContent.title}
            ></input>

            <ReactQuill
              theme="snow"
              onChange={handleContentChange}
              value={notesContent.content}
            />
            <div className="flex">
              {notesContent.new === true && (
                <Button size="lg" className="mt-5" onClick={handleCreate}>
                  Save New Document
                </Button>
              )}
              {!notesContent.new && (
                <Button size="lg" className="mt-5" onClick={handleSave}>
                  Save Changes
                </Button>
              )}
              {!notesContent.new && (
                <Button size="lg" className="mt-5" onClick={handleDelete}>
                  Delete
                </Button>
              )}
            </div>
          </div>
        </section>

        <section className="w-3/10  border-2 ">
          <div className="flex bg-[blue] border-2 flex-col h-[20vh]">
            <img className="w-full h-full" src="/lib.jpg "></img>
            {/* <p className="pl-3 flex items-center  h-3/10 ">Saved Notes</p> */}
          </div>

          <div className="w-full   overflow-y-auto">
            {mappedNotes.length != 0 && (
              <div
                className="text-center border p-2 bg-blue-400 hover:bg-[purple]"
                onClick={() => {
                  setNotesContent({ title: "", content: "", new: true });
                }}
              >
                <p>Blank Document</p>
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
    //Blocker, takes two click attempts to work for some reason
     function handleClick(){

        console.log("hello")
        setContent({title:data.title,content:data.content,new:false})
        
     }

    return (
      <div
        className="text-center border p-2 hover:bg-[#0571f4]"
        onClick={handleClick}
      >
        <p>{data.title}</p>
      </div>
    );


}
