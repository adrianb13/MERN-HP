import React from 'react';
import './App.css';
import Carousel from "./components/Carousel";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel /> 
        <Spinner />
      </header>
    </div>
  );
}

export default App;
