import React from 'react';
import Board from './Board.jsx';
import StatusBar from '../Components/StatusBar.jsx';
import MovesList from '../Components/MovesList.jsx';

function GameContainer() {

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

    return (
        <div className='game'>
            <div className='board-game'>
                <Board />
            </div>
            <div className='game-info'>
                <StatusBar />
                <MovesList />
            </div>
        </div>
    );
};

export default GameContainer;