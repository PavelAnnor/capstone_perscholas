

async function createUser(data) {


    try {
         const x= await fetch("http://localhost:3000/users", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
         });

         //if the request was bad, return false
          if (!x.ok) {
            return false;
          }

          //if the request was good, parse the response to json so i can acess what the request sent back
          return await x.json();
     
    } catch (error) {
      return false   
    }
   
    
}


async function loginUser(data){

  try {


     const x = await fetch("http://localhost:3000/users/login", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data)
     });

     //if the request was bad, return false
     if (!x.ok) {
       return false;
     }
     //if the request was good, parse the response to json so i can acess what the request sent back
     return await x.json();
    
  } catch (error) {

    return false;  
    
  }
}


async function getUserData(){

}


export {createUser,loginUser}