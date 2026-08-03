import { Button } from "../components/ui/button.jsx";
export default function Home(){



    return (
      <main className="w-full aspect-5/3 bg-[url('/backgrounds/mayuri_background.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center z-0">
        <div className="bg-black w-[93%] h-[93%] relative flex  z-1">
          <h1 className="absolute top-3/10  text-[#38383870]  text-9xl z-3">
            ANGA DEXdfsd
          </h1>

          <section className=" h-full w-45/100  flex items-center pl-10 z-4">
            <div className="">
              <h1 className="mt-auto text-7xl mb-3 relative z-5 text-blue-400">
                Lorem ipsum dolor sit amet
              </h1>
              <h2 className="text-3xl text-white">ipsum dolor sit amet</h2>
              <Button className="mt-5 text-white" size="lg">
                Get Started
              </Button>
            </div>
          </section>

          <section className="h-full w-55/100 flex  z-4">
            <img src="./panel(dark).png" className="w-full "></img>
          </section>
        </div>
      </main>
    );
}