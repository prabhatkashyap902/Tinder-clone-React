import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import Footers from "./Components/Footer";
function App() {
  return (
    <div className="App">
      {/**HEader */}
      <Header />
      {/**Cards */}
      <TinderCards />
      {/**Footer */}
      <Footers />
    </div>
  );
}

export default App;
