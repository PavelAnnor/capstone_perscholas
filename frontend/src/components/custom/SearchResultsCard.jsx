import { extractMangaInfo } from "../../util/mangaDexAPI.js";
import { Button } from "../ui/button.jsx";
import { useContext } from "react";
import UserContext from "../../context/userContext.jsx";


export default function SearchResultsCard({data}){

    const e = extractMangaInfo(data)

    console.log(e.tags)
    

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
          <Button className="bg-[#6d078c] text-black" size="lg">
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