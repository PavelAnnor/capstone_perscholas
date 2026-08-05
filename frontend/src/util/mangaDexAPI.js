async function getOneManga(title) {

    try {

         const url = `https://api.mangadex.org/manga?title=${title}`;
         const response = await fetch(url);
         const result = await response.json();
         const data = result.data

        if(data.length===0){
            return false
        }
         console.log(data);
         return data;
        
    } catch (error) {

        return false
        
    }

   
    
}



await getOneManga("bleach")


export{getOneManga}