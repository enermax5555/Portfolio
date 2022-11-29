import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className=''>
     
  <div className="bg-gray-900">
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
