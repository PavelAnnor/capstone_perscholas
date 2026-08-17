const BASE_URL = import.meta.env.VITE_BASE_URL;

//function that makes a post request
//Used for user registration
async function createUser(data) {
  try {
    console.log(BASE_URL);
    const x = await fetch(`${BASE_URL}/users`, {
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
    return false;
  }
}

//function that also makes a post request (so i can sned log in data in a body)
//used for log in
async function loginUser(data) {
  try {
    const x = await fetch(`${BASE_URL}/users/login`, {
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
    return false;
  }
}

async function createMangaSubmission(data) {
  try {
    const x = await fetch(`${BASE_URL}/manga-submission`, {
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
    return false;
  }
}

async function deleteMangaSubmission(data) {
  try {
    const x = await fetch(`${BASE_URL}/manga-submission/deleteMangaPost`, {
      method: "DELETE",
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
    return false;
  }
}

async function deleteAllMangaNotes(data) {
  try {
    const x = await fetch(`${BASE_URL}/manga-notes/delete-all-user-notes`, {
      method: "DELETE",
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
    return false;
  }
}

async function loadUserData(data) {
  try {
    const x = await fetch(`${BASE_URL}/manga-submission/getAllMangaPosts`, {
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
    return false;
  }
}

async function findLastRead(data) {
  try {
    const x = await fetch(`${BASE_URL}/manga-submission/get-last-read`, {
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
    return false;
  }
}

async function createNotes(data) {
  try {
    const x = await fetch(`${BASE_URL}/manga-notes`, {
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
    return false;
  }
}

async function getNotes(data) {
  try {
    const response = await fetch(`${BASE_URL}/manga-notes/get-all-notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    //if the request was bad, return false
    if (!response.ok) {
      return false;
    }
    //if the request was good, parse the response to json so i can acess what the request sent back

    return await response.json();
  } catch (error) {}
}

async function deleteNote(data) {
  try {
    const response = await fetch(`${BASE_URL}/manga-notes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }
    //if the request was good, parse the response to json so i can acess what the request sent back

    return await response.json();
  } catch (error) {}
}

async function editNote(data) {
  console.log("wehre gerring to database.js too");
  try {
    const response = await fetch(`${BASE_URL}/manga-notes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }
    //if the request was good, parse the response to json so i can acess what the request sent back

    return await response.json();
  } catch (error) {}
}

export {
  createUser,
  loginUser,
  createMangaSubmission,
  loadUserData,
  deleteMangaSubmission,
  findLastRead,
  createNotes,
  getNotes,
  deleteNote,
  editNote,
  deleteAllMangaNotes,
};
