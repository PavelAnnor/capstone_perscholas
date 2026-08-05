import { extractMangaInfo } from "../../util/mangaDexAPI.js"
import SearchResultsCard from "./SearchResultsCard.jsx";

export default function SearchResults({searchResults}){


    //if we get no results, just return an h2 saying we got nothing
    if(searchResults.length===0)
        return <h2>No Results....</h2>;

   //Map all of the data to a card I can display
    const cards = searchResults.map(c=> <SearchResultsCard data={c}></SearchResultsCard>)
    
    
    return (


        <div className="border-2 w-full ">


            
            
            <div className="border-3 w-full grid grid-cols-4 border-blue-400 gap-5 ">

                {cards}
               
               

               


                
            </div>



        </div>
    )


    




}


