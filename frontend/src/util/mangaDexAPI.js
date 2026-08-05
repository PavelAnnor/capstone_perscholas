//An async function to make a request to mangaDex api, that returns array of manag objects for managa matching a certain title
//Will be used for search logic
async function getManga(title) {

    try {


        if(!title)
            return []
         const url = `https://api.mangadex.org/manga?title=${title}`;
         const response = await fetch(url);
         const result = await response.json();
         const data = result.data

        if(data.length===0){
            return []
        }
         return data;
        
    } catch (error) {

        return [];
        
    }  
}

//Function to return one Mnaga object by id.
//Gets data specifically for ONE manga
async function getOneManga(id) {
  try {
    const url = `https://api.mangadex.org/manga/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;

    if (data.length === 0) {
      return false;
    }
    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
}


//Helper function to extract only the key information I need to display (proably on the search results page) so users can search easily 
//Takes in a mangaObject returned by getOneManga
//Title, year, author, description,type
function extractMangaInfo(mangaObject){
 
    const id = mangaObject.id
    const type= mangaObject.type

    const a = mangaObject.attributes
    const title = a.title.en;
    const description = a.description.en;
    const year = a.year;
    const vol = a.lastVolume
    const chap = a.lastChapter
    const tags = a.tags.map( t=> t.attributes.name.en)
    

    return {
      id: id,
      type: type ? type : "N/A",
      title: title ? title : "N/A",
      description: description ? description : "N/A",
      year: year ? year : "N/A",
      volumes: vol ? vol : "N/A",
      chapters: chap ? chap : "N/A",
      cover_id: extractCoverID(mangaObject)
        ? extractCoverID(mangaObject)
        : "N/A",
      tags: tags ? tags : [],
    };

}

















//Helper Function to extract CoverID from a manga object
function extractCoverID(mangaObject){
    const c = mangaObject.relationships.find((r) => r.type === "cover_art");
    return (c.id ? c.id :"N/A")
}


//Async Helper function to return the file name for a manga cover
async function getMangaCoverArtFileName(cover_id){

    try {
        
        const url = `https://api.mangadex.org/cover/${cover_id}`;
        const response = await fetch(url);
        const result = await response.json();
        const data = result.data.attributes.fileName
        console.log(data)
        return data
    } catch (error) {

        return false
        
    }
    
}

//Helper Function that gets me the image url for a manga cover
function getMangaCoverArt(mangaId, fileName){
    
    const imgUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`
    console.log(imgUrl)
    return imgUrl;
    
        
    
   
}







export{getManga,getOneManga,extractMangaInfo,getMangaCoverArtFileName}