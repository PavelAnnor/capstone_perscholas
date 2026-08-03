import { useContext } from "react"
import ThemeContext from "../../context/themeContext"
import {Button} from "../ui/button.jsx"


import { Link } from "react-router"

export default function Navbar({links}){


    //state variable and setter function used to change color theme
    const { colorTheme, setColorTheme } = useContext(ThemeContext)




    return (
      <nav className="border-1 w-full h-[12vh]  flex  justify-between pl-10 pr-10 z-50 text-white bg-[#0c0c0c] border-[#040e2e]">
        <div className="flex h-full flex items-center gap-5 ">
          <h1>Logo Name </h1>
          {links.map((l) => (
            <Link to={l.href} className="" key={l.text}>
              <Button size="lg" className="h-11 border-[white] bg-blue-600">
                {l.text}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex h-full  flex items-center p-0 gap-5">
          <Button size="lg" className="h-11 border-[white] bg-[#050579]">
            Login
          </Button>
          <Button size="lg" className="h-11 border-[white] bg-[#050579]">
            Register
          </Button>
        </div>
      </nav>
    );
}