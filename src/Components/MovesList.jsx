import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';

function MovesList() {
    const history = useSelector(state => state.history);
    const dispatch = useDispatch()

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
        dispatch(actions.goToStep(step));
    };
    
    return (
        <ol>{moves}</ol>
    )

}

export default MovesList