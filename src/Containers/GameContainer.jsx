import React from 'react';
import Board from './Board.jsx';
import StatusBar from '../Components/StatusBar.jsx';
import MovesList from '../Components/MovesList.jsx';

function GameContainer() {

    return (
        <div id='game-container'>
            <div className='column-container'>
                <Board />
            </div>
            <div className='column-container'>
                <StatusBar />
                <MovesList />
            </div>
        </div>
    );
};

export default GameContainer;