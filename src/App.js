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

  <div className="bg-slate-900" >

      <div className="">
      {/* <DancingLines/> */}
      <NavBar/>   
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </div>

      </div>
  </main>
  );
}

window.onload = function () {
  let loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
  console.log('Page load time is '+ loadTime/1000 + 's');
}

export default App;
