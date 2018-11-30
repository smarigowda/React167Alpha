import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [ counter, useCounter ] = useState(0);
    return (
      <div className="App">
        <header className="App-header">
          <button 
            style={{ 
              backgroundColor: 'blue',
              width: '150px',
              height: '50px',
              fontSize: '18px'
            }}
            onClick={() => { useCounter(counter+1)} }>Click Me: {counter}</button>
          <br />
        </header>
        
      </div>
    );
}

export default App;
