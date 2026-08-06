import { useContext, useState, useRef } from "react";
import { Button } from "../ui/button.jsx";
import UserContext from "../../context/userContext.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

export default function DashboardHeader() {

    const { user } = useContext(UserContext);


    return (
      <SectionWrapper>
        <div className="w-full border-2 border flex gap-5 ">
          <section className=" border-2 border-[blue] rounded w-4/10 ">
            <div className="flex   border-green-400 border bg-red-400">
              <img src="./test3.jpg"></img>
            </div>
            <div className="flex items-center bg-green-500 h-[10vh]">
              <p className="pl-5 text-3xl">{user.username}'s Library</p>
            </div>
          </section>

          <section className="border-2 border-[red] w-6/10 ">
            <div className="w-full h-[20%] bg-blue-500 flex items-center">
              <p className="pl-5">Pick Up Where You Left Off</p>
            </div>

            <div className="w-full bg-yellow-200 h-[80%] flex items-center  justify-around">
              <div className="w-[30%] h-[80%] bg-red-500 "></div>
              <div className="w-[50%] h-full bg-[blue] pl-3">
                <p>Title</p>
                <p>Last Chapter</p>
                <p>Last Volume</p>
                <Button>Access Notes</Button>
                <Button>Read</Button>
              </div>
            </div>
          </section>
        </div>
      </SectionWrapper>
    );
}
