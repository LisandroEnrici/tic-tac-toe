import { actionTypes } from "./actions";

const initialState = {
    stepNumber: 0,
    winner: null,
    xIsNext: true,
    history: [
        {
            squares: Array(9).fill(null)
        }
    ]
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.move:
            const history = state.history.slice(0, state.stepNumber + 1 );
            const current = history[state.stepNumber];
            const squaresCopy = current.squares.slice();

            squaresCopy[action.square] = state.xIsNext ? 'X' : 'O'
            return {
                ...state,
                history: history.concat([{
                    squares: squaresCopy
                }]),
                xIsNext: !state.xIsNext,
                stepNumber: history.length
            };
        case actionTypes.goToStep:
            return {
                ...state,
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
            };
        case actionTypes.gameOver:
            return {
                ...state
            };
        default:
            return state;
    };
};

export default reducer;
