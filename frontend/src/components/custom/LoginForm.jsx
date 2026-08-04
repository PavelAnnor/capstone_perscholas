import { Button } from "../ui/button.jsx";

import { useEffect, useRef } from "react";


export default function LoginForm() {

  useEffect(
  
      ()=>{
        async function testData(){
        const result = await fetch("http://localhost:3000/users");
        const x = await result.json()
        console.log(x)
      }testData()
  
      }
      ,[]
    )

    const formRef = useRef()


    function handleSubmit(e){

      e.preventDefault()
      console.log("Subitting")
      console.log(formRef.current.children)

    }
  return (
    <div className=" w-1/2 m-auto border-[#525252] border-1">
      <div className="w-1/1 flex border-b-2 ">
        <img src="./sauskeEyes.jpeg" className=" w-full aspect-auto"></img>
      </div>
      <form className="w-full flex flex-col p-10 gap-5 " ref={formRef}>
        <h2 className="text-4xl">Login</h2>
       
        <input
          placeholder="Email Address"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
        ></input>

        <input
          placeholder="Password"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
        ></input>

       

        <Button size="lg" className="bg-[#A00CF3]" onClick = {handleSubmit}>
          Log in
        </Button>
      </form>
    </div>
  );
}
