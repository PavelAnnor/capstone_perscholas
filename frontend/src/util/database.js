

//function that makes a post request
//Used for user registration
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

//function that also makes a post request (so i can sned log in data in a body)
//used for log in
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
     if (!x.ok || x.length ===0) {
       return false;
     }
     //if the request was good, parse the response to json so i can acess what the request sent back
     return await x.json();
    
  } catch (error) {

    return false;  
    
  }
}


async function createMangaSubmission(data){

  try {

     const x = await fetch("http://localhost:3000/manga-submission", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     });

     //if the request was bad, return false
     if (!x.ok || x.length === 0) {
       return false;
     }
     //if the request was good, parse the response to json so i can acess what the request sent back
     
     return await x.json();
    
  } catch (error) {

    return false
    
  }

}


async function loadUserData(data){

  try {
    const x = await fetch(`http://localhost:3000/manga-submission/getAllMangaPosts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    //if the request was bad, return false
    if (!x.ok || x.length === 0) {
      return false;
    }
    //if the request was good, parse the response to json so i can acess what the request sent back

    return await x.json();
  } catch (error) {

    return false
    
  }

}


export {createUser,loginUser,createMangaSubmission,loadUserData}