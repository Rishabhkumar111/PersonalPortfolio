import React from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
};

export default App;
