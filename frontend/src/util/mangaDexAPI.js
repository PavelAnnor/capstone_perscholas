//An async function to make a request to mangaDex api, that returns array of manag objects for managa matching a certain title
//Will be used for search logic

const BASE_URL = import.meta.env.VITE_BASE_URL;
async function getManga(title) {

    try {
        const response = await fetch(`${BASE_URL}/manga-dex/search-manga/${title}`) 
        const result = await response.json();
        return (result)
        
    } catch (error) {
         return [];  
    }
}

//Function to return one Mnaga object by id.
//Gets data specifically for ONE manga
async function getOneManga(id) {

  try {
     const response = await fetch(
       `${BASE_URL}/manga-dex/search-one-manga/${id}`,
     );
     const result = await response.json();
      if (result.length === 0) {
        return false;
      }
     return result;
    
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
async function getMangaCoverArtFileName(coverId) {
  try {
    const response = await fetch(
      `${BASE_URL}/manga-dex/manga-cover-art/${coverId}`,
    );
    const raw = await response.text();
    console.log("RAW RESPONSE:", JSON.stringify(raw)); // see exact bytes/characters
    const result = JSON.parse(raw);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
//Helper Function that gets me the image url for a manga cover
function getMangaCoverArt(mangaId, fileName){
    
    const imgUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`
    console.log(imgUrl)
    return imgUrl;
    
        
    
   
}







export{getManga,getOneManga,extractMangaInfo,getMangaCoverArtFileName}