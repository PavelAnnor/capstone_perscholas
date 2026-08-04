

async function createUser(data) {


    try {

         await fetch("http://localhost:3000/users", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
         });
        
    } catch (error) {
        
    }
   
    
}


export {createUser}