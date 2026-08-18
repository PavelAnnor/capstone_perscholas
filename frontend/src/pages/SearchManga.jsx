


import {useRef,useState,useEffect} from "react"
import { getManga } from "../util/mangaDexAPI.js";
import { Button } from "../components/ui/button.jsx";
import Searchbar from "../components/custom/Searchbar.jsx";
import SearchResults from "../components/custom/SearchResults.jsx";

import SectionWrapper from "../components/custom/SectionWrapper.jsx"





export default function SearchManga(){

    const [searchResults, setSearchResults] = useState([])
    const [value, setValue] = useState("bleach")


    const timerRef = useRef(null);


   

    return (
      <>
        <Searchbar
          text="Search for Titles to Add to Your List"
          placeholder="EX. BLEACH"
          getData={getManga}
          value={value}
          setValue={setValue}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        ></Searchbar>

        <SectionWrapper>
          <SearchResults searchResults={searchResults}></SearchResults>
        </SectionWrapper>
      </>
    );
}