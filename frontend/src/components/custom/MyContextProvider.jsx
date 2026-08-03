
import { useContext,useState } from "react"

import ThemeContext from "../../context/themeContext.js"


//A component that aggregates all context into one wrapper.
export default function MyContextProvider(props){



    //Provides a state varibale and a function used to toggle between light and dark mode
    const [colorTheme,setColorTheme]= useState("dark")
    function toggleColorTheme(){
        if(mode==="dark"){
          console.log("Changing to light")
          setColorTheme("light");
          return
        }
        console.log("Changing to Dark");
        setColorTheme("dark")
    }


    return (
      <div>
        <ThemeContext.Provider value={{colorTheme,setColorTheme}}>
            {props.children}

        </ThemeContext.Provider>
      </div>
    );
}