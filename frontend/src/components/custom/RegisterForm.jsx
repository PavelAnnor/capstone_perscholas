import { Button } from "../ui/button.jsx";
import { useEffect, useRef } from "react";

import { createUser } from "../../util/database.js";

export default function RegisterForm() {

   const formRef = useRef();

   useEffect(() => {
     async function testData() {
       const result = await fetch("http://localhost:3000/users");
       const x = await result.json();
       console.log(x);
     }
     testData();
   }, []);


   

  

   //function to submit a user to the database when the form is submitted
   async function handleSubmit(e) {
     e.preventDefault();
     console.log("Subitting");
     const formData = new FormData(formRef.current);
     const userData = Object.fromEntries(formData.entries());
     const submissionData = {"firstName":userData.firstName,"lastName":userData.lastName, "email":userData.email, "password":userData.password}
     await createUser(submissionData)
     console.log(userData,submissionData)
    
   }
  return (
    <div className=" w-1/2 m-auto border-[#525252] border-1">
      <div className="w-1/1 flex border-b-2 ">
        <img src="./sauskeEyes.jpeg" className=" w-full aspect-auto"></img>
      </div>
      <form className="w-full flex flex-col p-10 gap-5 " ref={formRef}>
        <h2 className="text-4xl">Create Account</h2>
        <input
          placeholder="First Name"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          name="firstName"
          required
        ></input>

        <input
          placeholder="Last Name"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          name="lastName"
          required
        ></input>

        <input
          placeholder="Email Address"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          name="email"
          required
        ></input>

        <input
          placeholder="Password"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          name="password"
          required
        ></input>

        <input
          placeholder="Repeat Password"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          name="repeatPassword"
          required
        ></input>

        <Button size="lg" className="bg-[#A00CF3]" onClick={handleSubmit} type = "submit">
         Create Account
        </Button>
      </form>
    </div>
  );
}
