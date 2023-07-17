import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';

function Square({ index }) {
    const currentState = useSelector(state => state.history[state.stepNumber]);
    const value = currentState.squares[index]
    const winner = currentState.winner;
    const dispatch = useDispatch();

    function handleClick(i) {
        // check the square clicked doesn't have a value and the game is not over yet
        if (value || winner) return;

        dispatch(actions.move(i));
    };

    return (
        <button
            className='square'
            onClick={() => handleClick(index)}
        >
            {value}
        </button>
    );
};

export default Square