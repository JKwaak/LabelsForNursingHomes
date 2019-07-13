import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "parent">
    <div className ="header">
    <button className = "headerbutton1"> Add label Item</button>
    <button className = "headerbutton2"> Add inventory</button>
      <header> Welcome</header>
    </div>

    <div className="App">
        <p>
        <button className = "name">
        Jim Smith
      </button>

      <button className = "name">
      Susan James
    </button>

        </p>
    </div>
    </div>
  );
}

export default App;
