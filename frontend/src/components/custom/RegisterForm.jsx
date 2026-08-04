import { Button } from "../ui/button.jsx";
import { useEffect, useRef,useContext,useNavigate } from "react";

import { createUser } from "../../util/database.js";
import UserContext from "../../context/userContext.jsx";

export default function RegisterForm() {

  //DOM Reference to the form
   const formRef = useRef();

  

   //Get the state varible for user and the setter function 
   const {user,setUser} = useContext(UserContext)

  
   //function to submit a user to the database when the form is submitted
   async function handleSubmit(e) {
     e.preventDefault();
     const formData = new FormData(formRef.current);
     const userData = Object.fromEntries(formData.entries());
     const submissionData = {"firstName":userData.firstName,"lastName":userData.lastName,"username":userData.username, "email":userData.email, "password":userData.password}
     const response = await createUser(submissionData)

     //if the request is good and I dont get sent back false, change the state variable
     if(response){
       setUser(response);
       alert("Able to Create User")
     }

     if(!response)
      alert("Unable to create User")


     
     
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
          placeholder="Username"
          className="border-b-2 p-3 pl-0 focus:outline-none focus:border-[#A00CF3]"
          name="username"
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

        <Button
          size="lg"
          className="bg-[#A00CF3]"
          onClick={handleSubmit}
          type="submit"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}
