import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
const TicTacToe = () => {
    // Initialize empty board and set X as first player
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    /**
     * Handle a player's move
     * @param {number} index - The index of the clicked square
     */
    const handleClick = (index) => {
        // If square is already filled or game is won, ignore click
        if (board[index] || calculateWinner(board)) return;

        // Create new board with the move
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    /**
     * Calculate if there's a winner
     * @param {Array} squares - The current board state
     * @returns {string|null} - The winner ('X' or 'O') or null if no winner
     */
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal
            [2, 4, 6], // diagonal
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Determine game status
    const winner = calculateWinner(board);
    const status = winner 
        ? `Winner: ${winner}`
        : board.every(square => square)
            ? "Game is a draw!"
            : `Next player: ${isXNext ? 'X' : 'O'}`;

    /**
     * Reset the game to initial state
     */
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    // Render game board
    return (
        <div className="game">
            <div className="status">{status}</div>
            <div className="board">
                {board.map((square, index) => (
                    <button
                        key={index}
                        className="square"
                        onClick={() => handleClick(index)}
                    >
                        {square}
                    </button>
                ))}
            </div>
            <button className="btn reset-button" onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default TicTacToe;
