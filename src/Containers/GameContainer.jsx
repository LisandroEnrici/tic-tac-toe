import React from 'react';
import Board from './Board.jsx';
import StatusBar from '../Components/StatusBar.jsx';
import MovesList from '../Components/MovesList.jsx';

function GameContainer() {

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