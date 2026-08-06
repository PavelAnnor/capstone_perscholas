import SectionWrapper from "../components/custom/SectionWrapper.jsx";
import {useContext,useState,useRef} from "react"
import UserContext from "../context/userContext.jsx";
import { Button } from "../components/ui/button";
import DashboardHeader from "../components/custom/DashboardHeader.jsx";
import DashboardLibrary from "../components/custom/DashboardLibrary.jsx";
export default function Dashboard(){

    const {user} = useContext(UserContext)




    return (
      <>
       
          <DashboardHeader></DashboardHeader>
          <DashboardLibrary></DashboardLibrary>
    
        
      </>

    );
}



function DashboardItem({colSpan,rowSpan}){

}