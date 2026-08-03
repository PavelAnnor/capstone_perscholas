import { useContext } from "react"
import ThemeContext from "../../context/themeContext"
import {Button} from "../ui/button.jsx"


import { Link } from "react-router"

export default function Navbar({links}){


    //state variable and setter function used to change color theme
    const { colorTheme, setColorTheme } = useContext(ThemeContext)




    return (
      <nav className="border-4 w-full h-[12vh] border-green-600 flex  justify-between pl-10 pr-10 z-50">
        <div className="flex h-full border-4 border-red-500 flex items-center ">
          <h1>Logo Name </h1>
        </div>

        <div className="flex h-full border-2 border-blue-500 flex items-center p-0 gap-2">
          {links.map((l) => (
            <Link to={l.href} className="" key = {l.text}>
              <Button size= "lg" className="h-10">{l.text}</Button>
            </Link>
          ))}
        </div>
      </nav>
    );
}