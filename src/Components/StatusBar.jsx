import React from "react";
import { useSelector } from 'react-redux';

function StatusBar() {
    const winner = useSelector(state => state.history[state.stepNumber].winner);
    const xIsNext = useSelector(state => state.xIsNext);

    let status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

    return (
        <div>
            {status}
        </div>
    )

}

export default StatusBar;