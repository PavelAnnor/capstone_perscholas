import { extractMangaInfo } from "../../util/mangaDexAPI.js";
import { Button } from "../ui/button.jsx";
import { useContext } from "react";
import UserContext from "../../context/userContext.jsx";

import {getMangaCoverArtFileName} from "../../util/mangaDexAPI.js"
import {createMangaSubmission} from "../../util/database.js"
import { loadUserData } from "../../util/database.js";


export default function SearchResultsCard({data}){

  const {user,setMangaLibrary} = useContext(UserContext)


  const e = extractMangaInfo(data);

  //function that will asssemlbe all the info i need to send in a post request to 
  //add a submission
  async function handleSubmission(){


    //have to make another call to the API to get a filename which is used in conjuctuion with manga id to get the cover art 
    //(really complciated for no reason)
    const fileName = await getMangaCoverArtFileName(e.cover_id)
    console.log(e)
    const submission = {
      userId: user._id ,
      mangaDexId: e.id,
      title: e.title,
      description: e.description,
      volumes: e.volumes,
      chapters: e.chapters,
      cover: `https://uploads.mangadex.org/covers/${e.id}/${fileName}`,
    };
    
    
    const x = await createMangaSubmission(submission)


    //when I add a manga to user libray, get the updated data directkly from mongoDB
    async function getUserData() {
      const response = await loadUserData({
        userId: user._id,
      });

      setMangaLibrary(response);
    }
    getUserData();



  }



    

   
    

    return (
      <article className=" col-span-1 bg-[#171717] rounded border-1 border-[white] p-3 flex flex-col gap-2">
        <p className="text-white text-xl"> {e.title}</p>
        <div>
          <Button className="bg-blue-400">{e.type}</Button>
        </div>
        <p>Desc: {e.description}</p>
        <p>Released: {e.year}</p>
        <p>Volumes: {e.volumes}</p>
        <p>Chapters: {e.chapters}</p>
        <Tags tags={e.tags}></Tags>
        <div className="flex">
          <Button className="bg-[#6d078c] text-black" size="lg" onClick = {handleSubmission}>
            Add to Your List
          </Button>
          <Button className="bg-[#ffffff] text-black ml-3" size="lg">
            Read
          </Button>
        </div>
      </article>
    );


}


function Tags({tags}){

  return(
    <div className=" flex gap-5 flex-wrap">
      {tags.map(t => <Button key ={t} className="bg-[#4f4f4f]">{t}</Button>)}
    </div>
  )

}