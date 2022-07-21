import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/cocktails/Navbar";
import Home from "./components/cocktails/pages/Home";
import About from "./components/cocktails/pages/About";
import Error from "./components/cocktails/pages/Error";
import SingleCocktail from "./components/cocktails/pages/SingleCocktail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
