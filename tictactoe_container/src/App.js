import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TicTacToe Classic
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Classic Game</div>
            <h1 className="title">Tic Tac Toe</h1>
            <div className="description">
              Take turns to place X's and O's on the board. Get three in a row to win!
            </div>
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
