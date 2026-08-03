import { Button } from "../components/ui/button.jsx";
export default function Home(){



    return (
      <main className="w-full border-4 h-[100vh] bg-[url('/backgrounds/mayuri_background.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="bg-blue-400 w-[90%] h-[90%] relative flex">
          <section className="bg-green-400 h-full w-1/2  flex items-center pl-5">
            <div className="">
              <h1 className="mt-auto text-7xl mb-3">
                Lorem ipsum dolor sit amet
              </h1>
              <h2 className="text-3xl">ipsum dolor sit amet</h2>
              <Button className="mt-5" size="lg">
                Get Started
              </Button>
            </div>
          </section>

          <section className="bg-black h-full w-1/2 flex">
            <img src= "./home1.png"></img>
          </section>
        </div>
      </main>
    );
}