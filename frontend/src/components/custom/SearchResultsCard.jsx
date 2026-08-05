import { extractMangaInfo } from "../../util/mangaDexAPI.js";
import { Button } from "../ui/button.jsx";
import { useContext } from "react";
import UserContext from "../../context/userContext.jsx";
export default function SearchResultsCard({data}){

    const e = extractMangaInfo(data)
    

    return (
      <article className=" col-span-1 bg-[#171717] rounded border-1 border-[white] p-3">
        <p className="text-white text-xl"> {e.title}</p>
        <Button className="bg-blue-400">{e.type}</Button>
        <p>Desc: {e.description}</p>
        <p>Released: {e.year}</p>
        <p>Volumes: {e.volumes}</p>
        <p>Chapters: {e.chapters}</p>
        <Button className="bg-[white] text-black" size="lg">Add to Your List</Button>
      </article>
    );


}