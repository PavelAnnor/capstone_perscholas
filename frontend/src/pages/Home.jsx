import { Button } from "../components/ui/button.jsx";
import { useContext } from "react";
import ThemeContext from "../context/themeContext.js";
import UserContext from "../context/userContext.jsx";


import Hero from "../components/custom/Hero.jsx";
import Features from "../components/custom/Features.jsx";
import Dashboard from "./Dashboard.jsx";

export default function Home(){


   const { colorTheme} = useContext(ThemeContext)
   const {user} = useContext(UserContext)



   if(!user){
    return (
      <div className="bg-[var(--bg-primary)] mt-10">
        <Hero
          mainText="Lorem Ipsumn yuri No"
          subText="Yama nozi yoi ku tor"
        ></Hero>
        <div className="mt-10">
          <Features></Features>
        </div>
      </div>
    );

   }
    return (
      <div className="bg-[var(--bg-primary)]">
       <Dashboard></Dashboard>
      </div>
    );
}