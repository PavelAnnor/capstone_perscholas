


import {useRef,useState} from "react"
import { getManga } from "../util/mangaDexAPI.js";
import { Button } from "../components/ui/button.jsx";


export default function SearchManga(){

    const [results, setResults] = useState([])
    const searchBarRef = useRef(null)



    return (
      <main className="w-full border-1 mt-20">
        <h1 className="mt-auto text-6xl mb-3 relative z-5 text-[var(--text-blue-primary)] text-center">
          Search for Titles to Add to Your List
        </h1>

        <form className="text-center flex w-1/2 m-auto  flex-col">
          <div className="border-1 p-4 ">
            <input
              className="w-full p-2 border border-transparent focus:border-blue-400 focus:outline-none text-2xl h-[12vh]"
              placeholder="EX Bleach"
            />
          </div>
          <br></br>
          <Button className="w-2/10 m-auto bg-[var(--bg-button-blue-primary)]">
            Search
          </Button>
        </form>
      </main>
    );
}