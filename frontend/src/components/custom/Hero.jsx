import { Button } from "../ui/button.jsx";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext.js";
import UserContext from "../../context/userContext.jsx";



import SectionWrapper from "./SectionWrapper.jsx";


export default function Hero() {
  const { colorTheme } = useContext(ThemeContext);
  const {user} = useContext(UserContext)
  

  return (
    <SectionWrapper>
      <main className="bg-[var(--bg-primary)] w-[100%] h-[100%] relative flex  aspect-6/3">
        <section className=" h-full w-45/100  flex items-center  z-4">
          <div className="">
            <h1 className="mt-auto text-7xl mb-3 relative z-5 text-[var(--text-blue-primary)]">
              Your Second Brain
            </h1>
            <h2 className="text-3xl text-[var(--text-color-primary)]">
              Create reading lists, notes, and track progress, all in one
              cnetralized application.
            </h2>
            {!user && (
              <Button
                className="mt-5 text-white bg-[var(--bg-button-blue-primary)]"
                size="lg"
              >
                Get Started
              </Button>
            )}
          </div>
        </section>

        <section className="h-full w-55/100 flex  z-4">
          {colorTheme === "dark" && (
            <img src="./panel(dark).png" className="w-full "></img>
          )}

          {colorTheme === "light" && (
            <img src="./panel(light).png" className="w-full "></img>
          )}
        </section>
      </main>
    </SectionWrapper>
  );
}
