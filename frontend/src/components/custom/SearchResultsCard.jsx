import { extractMangaInfo } from "../../util/mangaDexAPI.js";
export default function SearchResultsCard({data}){

    const e = extractMangaInfo(data)
    

    return (
      <article className="border-green-400 col-span-1 bg-green-500">
        <p> {e.title}</p>

        {/* {test.type}
        {test.volumes}
        {test.chapters}
        {test.description} */}
      </article>
    );


}