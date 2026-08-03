//Import Components
import { Button } from "@/components/ui/button";


import MyContextProvider from "./components/custom/MyContextProvider";

import Navbar from "./components/custom/Navbar";



//Node Module Imports
import { Route,Routes } from "react-router";



function App() {
  return (
    <MyContextProvider>
      <Navbar></Navbar>
      <Routes></Routes>
    </MyContextProvider>
  );
}

export default App;
