import { extractMangaInfo } from "../../util/mangaDexAPI.js"
import SearchResultsCard from "./SearchResultsCard.jsx";
import UserContext from "../../context/userContext.jsx";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router";

export default function SearchResults({searchResults}){

     const { user } = useContext(UserContext);
     const navigate = useNavigate();


    useEffect(()=>{
         if (!user) navigate("/", { replace: true });
    },[])

   

    
   



    //if we get no results, just return an h2 saying we got nothing
    if(searchResults.length===0 || !searchResults)
        return <h2 className="text-6xl text-center text-[#ffffff]">No Results....</h2>;

   //Map all of the data to a card I can display
    const cards = searchResults.map(c=> <SearchResultsCard key = {c.id}data={c}></SearchResultsCard>)
    
    
    return (


        <div className=" w-full ">


            
            
            <div className=" w-full grid grid-cols-1 gap-5  ">

                {cards}
               
               

               


                
            </div>



        </div>
    )


    




}


