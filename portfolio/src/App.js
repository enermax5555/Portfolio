import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import About from "./Components/About";

function App() {
  return (
    <main className=''>
     
  <div className="bg-gray-900">
      <NavBar/>

      <Home/>
      <About/>

  </div>
  </main>
  );
}

export default App;
