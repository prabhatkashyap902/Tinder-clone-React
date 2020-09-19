import React from 'react';
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';

function App() {
  return (
    <div className="App">
      {/**HEader */}
      <Header />
      {/**Cards */}
      <TinderCards/>
      {/**Footer */}
    </div>
  );
}

export default App;
