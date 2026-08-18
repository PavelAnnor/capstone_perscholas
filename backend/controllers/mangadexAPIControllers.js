async function getManga(req,res) {
   
  try {
    if (!req.params.title) return [];
    const url = `https://api.mangadex.org/manga?title=${req.params.title}`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;

    if (data.length === 0) {
      res.status(400).send([]);
    }
    res.status(200).send(data);
  } catch (error) {
    console.log(error)
    res.status(400).send({message:error.message});
  }
}

async function getOneManga(req,res) {
  try {
    const url = `https://api.mangadex.org/manga/${req.params.coverId}`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;

    if (data.length === 0) {
      res.send([]);
    }

    res.send(data)
  } catch (error) {
    res.send(false);
  }
}

async function getMangaCoverArtFileName(req,res) {
  try {
    const url = `https://api.mangadex.org/cover/${req.params.coverId}`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data.attributes.fileName;
    res.json(data);
  } catch (error) {
   res.send("from here");
  }
} 


export {getManga,getOneManga,getMangaCoverArtFileName}