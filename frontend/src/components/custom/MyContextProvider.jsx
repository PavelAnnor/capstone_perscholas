
import { useContext,useState,useRef } from "react"

import ThemeContext from "../../context/themeContext.js"


//A component that aggregates all context into one wrapper.
export default function MyContextProvider(props){



    //Provides a state varibale and a function used to toggle between light and dark mode
    const [colorTheme,setColorTheme]= useState("dark")

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
        <div ref={bodyRef}>{props.children}</div>
      </ThemeContext.Provider>
    );
}