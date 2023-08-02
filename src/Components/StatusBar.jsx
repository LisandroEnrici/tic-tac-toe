import React from "react";
import { useSelector } from 'react-redux';

function StatusBar() {
    const winner = useSelector(state => state.history[state.stepNumber].winner);
    const xIsNext = useSelector(state => state.xIsNext);

    let status = winner ? winner + ' HAS WON! 🥳' : (xIsNext ? 'X' : 'O') + ' is next...';

    return (
        <div className='status-bar'>
            {status}
        </div>
    )

}

export default StatusBar;