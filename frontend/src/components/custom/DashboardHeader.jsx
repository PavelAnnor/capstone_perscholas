import { useContext, useState, useRef } from "react";
import { Button } from "../ui/button.jsx";
import UserContext from "../../context/userContext.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

export default function DashboardHeader() {
  const { user } = useContext(UserContext);

  return (
    <SectionWrapper>
      <div className="w-full flex gap-5   ">
        <section className=" border-2 border-[#eb0202] rounded w-6/10 ">
          <div className="flex border w-full ">
            <img className="w-full aspect-3/1" src="./test3.jpg"></img>
          </div>
          <div className="bg-green-500 flex w-full aspect-8/1 items-center">
            <p className="pl-5 text-3xl">{user.username}'s Library</p>
          </div>
        </section>

        <section className="w-4/10 bg-red-500 flex flex-col">
          <div className="bg-green-500 flex w-full aspect-8/1 items-center">
            <p className="pl-5 text-2xl">Pick Up Where You Left Off</p>
          </div>
          <div className="w-full bg-blue-400 flex flex-1">
            <div className="bg-yellow-300 w-[40%]"></div>
            <div className="bg-[gray] w-[60%]"></div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
}
