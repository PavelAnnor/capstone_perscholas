
import { useContext,useState,useRef,useEffect } from "react"

import ThemeContext from "../../context/themeContext.js"

import  UserContext  from "../../context/userContext.jsx"



import UserContextWrapper from "../../context/userContext.jsx"


import { loadUserData } from "../../util/database.js"


//A component that aggregates all context into one wrapper.
export default function MyContextProvider(props){






    //Provides a state varibale and a function used to toggle between light and dark mode
    const [colorTheme,setColorTheme]= useState("dark")


    //Provides a state varibale that represents the user and their data
    const [user,setUser] = useState(null)

    const [mangaLibrary,setMangaLibrary] = useState([])

    


    //use effect to render the users manga Library info when the log in 
      useEffect(

        ()=>{

          //if we dont have a log in dont do anythign 
          if(!user)
            return

          async function getUserData(){

            const response = await loadUserData({
              userId: user._id,
            });

            setMangaLibrary(response)

            

            

          } getUserData()

        },
        [user]
      );

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
      <UserContext.Provider value = {{user,setUser}}>
        <ThemeContext.Provider
          value={{ colorTheme, setColorTheme, toggleColorTheme, bodyRef }}
        >
          <div
            className="bg-[var(--bg-primary)] text-[var(--text-color-primary)] h-full w-full"
            ref={bodyRef}
          >
            {props.children}
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
}