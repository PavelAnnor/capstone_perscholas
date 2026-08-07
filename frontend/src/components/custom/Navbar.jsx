import { useContext ,useRef} from "react"
import ThemeContext from "../../context/themeContext.js"
import UserContext from "../../context/userContext.jsx";
import {Button} from "../ui/button.jsx"
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


import { Link } from "react-router"

export default function Navbar({links}){


    //state variable and setter function used to change color theme
    const { colorTheme, setColorTheme,toggleColorTheme} = useContext(ThemeContext)
     const { user, setUser } = useContext(UserContext);


    const themeSwitchRef = useRef(null)


    function handleSwitch(){
      console.log("Swithing Modes.....")
      toggleColorTheme()
    }



    



    return (
      <nav className=" w-full h-[12vh]  flex  justify-between pl-10 pr-10 z-50 text-[var(--text-color-primary)] bg-[var(--bg-primary)] border-b-1 ">
        <div className="flex h-full flex items-center gap-5 ">
          <Link to="/">
            <h1>MANGA LIB </h1>
          </Link>
          {links.map((l) => (
            <Link to={l.href} className="" key={l.text}>
              <Button
                size="lg"
                className="h-11 border-[var(--border-primary)] bg-[var(--bg-button-blue-primary)] text-[var(--text-color-primary)]"
              >
                {l.text}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex h-full  flex items-center p-0 gap-5 ">
          {!user && (
            <>
              <Link to="/login">
                <Button
                  size="lg"
                  className="h-11 border-[var(--border-primary)] bg-[var(--bg-button-blue-secondary)] text-[var(--text-color-primary)]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="h-11 border-[var(--border-primary)] bg-[var(--bg-button-blue-secondary)] text-[var(--text-color-primary)]"
                >
                  Register
                </Button>
              </Link>
            </>
          )}

          {user && (
            <h2>
              Welcome <span className="text-blue-500">{user.username}</span>!
            </h2>
          )}

          {/* <Switch
            id="themeSwitch"
            ref={themeSwitchRef}
            onCheckedChange={handleSwitch}
            defaultChecked={true}
          ></Switch> */}
          {/* <Label htmlFor="themeSwitch">
            {colorTheme === "dark" ? "Dark" : "Light"}
          </Label> */}
        </div>
      </nav>
    );
}