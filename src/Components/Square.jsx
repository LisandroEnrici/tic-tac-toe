import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';

function Square({ index }) {
    const value = useSelector(state => state.history[state.stepNumber].squares[index]);
    const winner = useSelector(state => state.winner);
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