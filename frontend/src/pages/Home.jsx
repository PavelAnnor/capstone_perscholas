import { Button } from "../components/ui/button.jsx";
import { useContext } from "react";
import ThemeContext from "../context/themeContext.js";


import Hero from "../components/custom/Hero.jsx";
import Features from "../components/custom/Features.jsx";

export default function Home(){


   const { colorTheme} = useContext(ThemeContext)



    return (
      <div className="bg-[var(--bg-primary)]">
        <Hero
          mainText="Lorem Ipsumn yuri No"
          subText="Yama nozi yoi ku tor"
        ></Hero>
        <Features></Features>

        
      </div>
    );
}