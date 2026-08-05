//Import Components

//Shadcc

//Custom Components
import MyContextProvider from "./components/custom/MyContextProvider.jsx";
import Navbar from "./components/custom/Navbar.jsx";



//Page Imports 
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SearchManga from "./pages/SearchManga.jsx";

//Node Module Imports
import { Route,Routes } from "react-router";


//Importing any important data
import { navbarLinks } from "./data/navbarLinks";
;



function App() {
  return (
    <MyContextProvider>
      <Navbar links={navbarLinks}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}> </Route>
        <Route path = "/search-manga" element={<SearchManga></SearchManga>}></Route>
      </Routes>
    </MyContextProvider>
  );
}

export default App;
