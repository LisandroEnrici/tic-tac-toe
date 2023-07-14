import React from "react";
import { useSelector } from 'react-redux';

function MovesList() {
    const history = useSelector(state => state.history);

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
    
    function jumpTo(step) {
        console.log(step);
    };
    
    return (
        <ol>{moves}</ol>
    )

}

export default MovesList