import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Nav from "./components/Nav";

const App = () => (
  <>
    <Nav />
    <Router>
      <Landing path="/" />
      <About path="/about" />
      <Projects path="/projects" />
      <Resume path="/resume" />
    </Router>
  </>
);

export default App;
