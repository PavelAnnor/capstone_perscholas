import { Button } from "../ui/button.jsx";

import { useEffect, useRef,useContext } from "react";

import UserContext from "../../context/userContext.jsx";

import { loginUser } from "../../util/database.js";



export default function LoginForm() {

  const {user,setUser} = useContext(UserContext)

    const ref1 = useRef()
    const ref2 = useRef()


    async function handleSubmit(e){

      e.preventDefault()
      const email= ref1.current.value
      const pass = ref2.current.value
      const submissionData = {"email":email ,"password":pass}
      const x = await loginUser(submissionData)


      if(x.length===0){
        alert("Log in Attempt Unsccessful")
        return false;
      }
     
        alert("Log in Attempt Successful!");
        setUser(x);
  

  console.log(x)
      

    }
  return (
    <div className=" w-1/2 m-auto border-[#525252] border-1">
      <div className="w-1/1 flex border-b-2 ">
        <img src="./sauskeEyes.jpeg" className=" w-full aspect-auto"></img>
      </div>
      <form
        className="w-full flex flex-col p-10 gap-5 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl">Login</h2>

        <input
          placeholder="Email Address"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          required
          ref={ref1}
        ></input>

        <input
          placeholder="Password"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          required
          ref={ref2}
        ></input>

        <Button size="lg" className="bg-[#A00CF3]" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
}
