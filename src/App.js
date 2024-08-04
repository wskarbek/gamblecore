import React from 'react';
import './App.css';
import SlotMachine from './oab/SlotMachine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>One-Armed Bandit Game</h1>
      </header>
      <main>
        <SlotMachine />
      </main>
    </div>
  );
}

export default App;
