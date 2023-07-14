import React from 'react';
import { useSelector } from 'react-redux';
import Board from '../Components/Board';

function Game() {

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };


    function jumpTo(step) {
        return;
    };

    const gameState = useSelector(state => state);
    const history = gameState.history;
    const moves = history.map((step, move) => {
        const desc = move ? "Go to move # " + move : "Restart Game";

        return (
            <li key={move}>
                <button
                    onClick={() =>
                        jumpTo(move)
                    }>
                    {desc}
                </button>
            </li>
        );
    });

    let status = gameState.winner ? 'Winner: ' + gameState.winner : 'Next player: ' + (gameState.xIsNext ? 'X' : 'O');

    return (
        <div className='game'>
            <div className='board-game'>
                <Board />
            </div>
            <div className='game-info'>
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;