import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';

function Square({ index }) {
    const currentState = useSelector(state => state.history[state.stepNumber]);
    const value = currentState.squares[index]
    const winner = currentState.winner;
    const dispatch = useDispatch();

    function handleClick(i) {
        dispatch(actions.move(i));
    };

    return (
        <button
            className='square'
            onClick={() => handleClick(index)}
            disabled={value || winner}
        >
            <div style={{
                position: 'absolute',
                fontSize: '60px',
            }}>
                {value}
            </div>
        </button>
    );
};

export default Square