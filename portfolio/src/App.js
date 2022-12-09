import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";

import DancingLines from "react-dancing-lines";
function App() {
  return (
    <main>
       
  <div className="bg-slate-900">

      <NavBar/>   
      <Home/>
      <About/>
      <Projects/>
      <Contact/>

      </div>

  </main>
  );
}

export default App;
