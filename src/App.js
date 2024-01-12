import React from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skill";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
    </>
  );
};

export default App;
