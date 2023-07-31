import React from 'react';
import Board from './Board.jsx';
import StatusBar from '../Components/StatusBar.jsx';
import MovesList from '../Components/MovesList.jsx';

const styles = {
    gameContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        maxWidth: '30rem',
        height: '90%',
        maxHeight: '15rem',
        color: '#fff',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0.25rem 1.5rem',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        borderRadius: '1.5rem',
        background: 'radial-gradient(at top left, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%) border-box',
        backdropFilter: 'blur(3px)',
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        width: '50%',
        height: '100%'
    }
}

function GameContainer() {

    return (
        <div style={styles.gameContainer}>
            <div style={styles.column}>
                <Board />
            </div>
            <div style={styles.column}>
                <StatusBar />
                <MovesList />
            </div>
        </div>
    );
};

export default GameContainer;