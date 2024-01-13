import React from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skill";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
