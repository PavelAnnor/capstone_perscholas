import { Button } from "../ui/button.jsx";


export default function LoginForm() {
  return (
    <div className=" w-1/2 m-auto border-[#525252] border-1">
      <div className="w-1/1 flex border-b-2 ">
        <img src="./sauskeEyes.jpeg" className=" w-full aspect-auto"></img>
      </div>
      <form className="w-full flex flex-col p-10 gap-5 ">
        <h2 className="text-4xl">Login</h2>
       
        <input
          placeholder="Email Address"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
        ></input>

        <input
          placeholder="Password"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
        ></input>

       

        <Button size="lg" className="bg-[#A00CF3]">
          Log in
        </Button>
      </form>
    </div>
  );
}
