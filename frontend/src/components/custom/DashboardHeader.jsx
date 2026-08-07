import { useContext, useState, useRef,useEffect } from "react";
import { Button } from "../ui/button.jsx";
import UserContext from "../../context/userContext.jsx";
import SectionWrapper from "./SectionWrapper.jsx";
import { findLastRead } from "../../util/database.js";


export default function DashboardHeader() {
  const { user, mangaLibrary} = useContext(UserContext);

  const [lastRead,setLastRead] = useState({})


  //on mount, make a call to the date base and get the manga that was most recently accsed, to display on the dashboard
  useEffect(()=>{

    async function getLast(){

     const x =  await findLastRead({userId:user._id})
     setLastRead(x[0])

    }getLast()
  },[mangaLibrary])


  

  return (
    <SectionWrapper>
      <div className="w-full flex gap-5   ">
        <section className=" border-2 border-[#fbfbfb] rounded w-7/10 ">
          <div className="flex border w-full ">
            <img className="w-full aspect-3/1" src="./test3.jpg"></img>
          </div>
          <div className=" flex w-full aspect-8/1 items-center">
            <p className="pl-5 text-3xl">{user.username}'s Library</p>
          </div>
        </section>

        <section className="w-3/10 border-2 border-[#fbfbfb] flex flex-col">
          <div className="border-b-2 flex w-full aspect-8/1 items-center justify-center">
            <p className="text-2xl text-center">Recently Added</p>
          </div>
          <div className="w-full flex flex-1 justify-center p-2">
            <div className=" w-[60%] flex">
              {lastRead && <img src={lastRead.cover} className="w-full"></img>}
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
}
