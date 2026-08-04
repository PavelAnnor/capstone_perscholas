
import { useContext,useState,useRef } from "react"

import ThemeContext from "../../context/themeContext.js"


//A component that aggregates all context into one wrapper.
export default function MyContextProvider(props){



    //Provides a state varibale and a function used to toggle between light and dark mode
    const [colorTheme,setColorTheme]= useState("dark")

    //reference to the div that wrappes everything in my app, Ill toggle the class list on it to change between light and dark mode
    const bodyRef = useRef()
    function toggleColorTheme(){
        if(colorTheme==="dark"){
          console.log("Changing to light")
          setColorTheme("light");
          console.log(bodyRef.current)
          bodyRef.current.classList.toggle("lightTheme")
          console.log(bodyRef.current.classList)
          return
        }
        console.log("Changing to Dark");
        setColorTheme("dark")
        bodyRef.current.classList.toggle("lightTheme");
    }


    return (
      <ThemeContext.Provider
        value={{ colorTheme, setColorTheme, toggleColorTheme, bodyRef }}
      >
        <div
          className="bg-[var(--bg-primary)] text-[var(--text-color-primary)]"
          ref={bodyRef}
        >
          {props.children}{" "}
        </div>
      </ThemeContext.Provider>
    );
}