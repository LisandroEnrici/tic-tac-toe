import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';

function MovesList() {
    const history = useSelector(state => state.history);
    const stepNumber = useSelector(state => state.stepNumber);
    const dispatch = useDispatch();
    const listRef = useRef();    

    useEffect(() => {
        const list = listRef.current;
        list.scrollTop = list.scrollHeight;
      }, [history]);    

    const moves = history.map((step, move) => {
        const desc = move ? "Go to move # " + move : "Restart Game";
        const customStyles = move < stepNumber ? 'past-step' : (move > stepNumber ? 'future-step' : '')

        return (
            <button
                key={move}
                onClick={() => jumpTo(move)}
                className={`step ${customStyles}`}
                disabled={move === stepNumber}
            >
                <div style={{
                    position: 'absolute',
                    fontSize: '20px',
                }}>
                    {desc}
                </div>
            </button >
        );
});

function jumpTo(step) {
    dispatch(actions.goToStep(step));
};

return (
    <div className='moves-list' ref={listRef}>
        {moves}
    </div>
)

}

export default MovesList