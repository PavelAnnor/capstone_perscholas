import { useContext ,useRef} from "react"
import ThemeContext from "../../context/themeContext"
import {Button} from "../ui/button.jsx"
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


import { Link } from "react-router"

export default function Navbar({links}){


    //state variable and setter function used to change color theme
    const { colorTheme, setColorTheme,toggleColorTheme,bodyRef } = useContext(ThemeContext)


    const themeSwitchRef = useRef(null)


    function handleSwitch(){
      console.log("Swithing Modes.....")
      toggleColorTheme()
    }



    



    return (
      <nav className="border-1 w-full h-[12vh]  flex  justify-between pl-10 pr-10 z-50 text-[var(--text-color-primary)] bg-[var(--bg-primary)] ">
        <div className="flex h-full flex items-center gap-5 ">
          <h1>Logo Name </h1>
          {links.map((l) => (
            <Link to={l.href} className="" key={l.text}>
              <Button
                size="lg"
                className="h-11 border-[var(--border-primary)] bg-[var(--bg-button-blue-primary)]"
              >
                {l.text}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex h-full  flex items-center p-0 gap-5">
          <Button
            size="lg"
            className="h-11 border-[var(--border-primary)] bg-[var(--bg-button-blue-secondary)]"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="h-11 border-[var(--border-primary)] bg-[var(--bg-button-blue-secondary)]"
          >
            Register
          </Button>
          <Switch
            id="themeSwitch"
            ref={themeSwitchRef}
            onCheckedChange={handleSwitch}
            defaultChecked={true}
          ></Switch>
          <Label htmlFor="themeSwitch">Toggle Mode</Label>
        </div>
      </nav>
    );
}