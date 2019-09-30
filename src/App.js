import React from 'react';
import './App.css';

import Body from './Body'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Higher Order Components
        </h1>

        <p> 
          The icons below are constructed with HOCs that
          enable the popups on mouse over
        </p>

      </header>

      <Body/>
    </div>
  );
}

export default App;
