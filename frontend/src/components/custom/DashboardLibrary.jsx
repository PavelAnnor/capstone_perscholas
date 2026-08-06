import SectionWrapper from "./SectionWrapper";
import { useContext } from "react";
import UserContext from "../../context/userContext";


import LibraryCard from "./LibraryCard.jsx";



export default function DashboardLibrary(){

  const { user, mangaLibrary, setMangaLibrary } = useContext(UserContext);

  console.log(mangaLibrary)

  const mappedLibrary = mangaLibrary.map(m=><LibraryCard data = {m}></LibraryCard>)


    return (
      <SectionWrapper margin="">
        <main className="border-4">
          <p className="text-4xl border-2 border-blue-700 bg-blue-600 p-5">
            Manga Library
          </p>
          <div className="w-full grid grid-cols-6 border-green-600 border gap-5 p-5 ">
            {mangaLibrary && mappedLibrary}
            {mangaLibrary.length===0 && <h1 className="text-4xl text-center col-span-6">NOTHING TO SEE...</h1>}
          </div>
        </main>
      </SectionWrapper>
    );
}