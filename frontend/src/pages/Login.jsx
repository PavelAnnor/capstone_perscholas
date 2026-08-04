import SectionWrapper from "../components/custom/SectionWrapper"
import { Button } from "../components/ui/button";

export default function Login(){


    return (
      <SectionWrapper>
        <div className=" w-1/2 m-auto border border-green-400">
          <div className="w-1/1 flex ">
            <img src="./sauskeEyes.jpeg" className=""></img>
          </div>
          <form className="w-full border-red-500 border-3 flex flex-col p-10 gap-5 ">
            <h2 className="text-4xl">Login</h2>
            <input
              placeholder="First Name"
              className="border-b-2 p-3 pl-0"
            ></input>

            <input
              placeholder="Last Name"
              className="border-b-2 p-3 pl-0"
            ></input>

            <input
              placeholder="Email Address"
              className="border-b-2 p-3 pl-0"
            ></input>

            <input
              placeholder="Password"
              className="border-b-2 p-3 pl-0"
            ></input>

            <input
              placeholder="Repeat Password"
              className="border-b-2 p-3 pl-0"
            ></input>

            <Button className="w-2/10"> Log in</Button>
          </form>
        </div>
      </SectionWrapper>
    );
}