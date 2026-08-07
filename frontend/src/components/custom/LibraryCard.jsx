import { Button } from "../ui/button.jsx";
import { deleteMangaSubmission, loadUserData,deleteAllMangaNotes } from "../../util/database.js";
import { useContext } from "react";
import UserContext from "../../context/userContext.jsx"
import { Link } from "react-router";

export default function LibraryCard({data}){

  const {user,setMangaLibrary} = useContext(UserContext)

  const url = `/create-notes/${data._id}`
  



  async function handleDelete(){

   
    const payload = {managDexId:data.mangaDexId, userId:user._id}
   console.log(data)

    const x = await deleteMangaSubmission(data)
    const y = await deleteAllMangaNotes(payload)
    

    async function getUserData() {
      const response = await loadUserData({
        userId: user._id,
      });

      setMangaLibrary(response);
    }
    getUserData();
  }

    return (
      <article className="col-span-1 aspect-auto  flex aspect-auto relative border-1">
        <img src={data.cover} className="w-full"></img>
        <div className="absolute w-full bg-[black] bottom-0 z-5 min-h-[20%] p-3">
          <p>{data.title}</p>
          <div className="flex gap-1 items-center p-0">
            <Link to={url} className=" m-0">
              <Button className="bg-[blue]" size="xs">
                Access
              </Button>
            </Link>
            <Link>
              <Button className="bg-[blue]" size="xs" onClick={handleDelete}>
                Delete
              </Button>
            </Link>
          </div>
        </div>
      </article>
    );

}