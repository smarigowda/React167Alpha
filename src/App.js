import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [ counter, useCounter ] = useState(0);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React - { counter }
          </a>
          <br/>
          <button 
            style={{ 
              backgroundColor: 'red',
              width: '150px',
              height: '50px',
              fontSize: '18px'
            }}
            onClick={() => { useCounter(counter+1)} }>Increment</button>
        </header>
        
      </div>
    );
}

export default App;
