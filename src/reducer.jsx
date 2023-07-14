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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.move:
            const history = state.history.slice(0, state.stepNumber + 1 );
            const current = history[state.stepNumber];
            const squaresCopy = current.squares.slice();
            
            squaresCopy[action.square] = state.xIsNext ? 'X' : 'O';
            const winner = calculateWinner(squaresCopy);
            return {
                ...state,
                history: history.concat([{
                    squares: squaresCopy
                }]),
                xIsNext: !state.xIsNext,
                stepNumber: history.length,
                winner
            };
        case actionTypes.goToStep:
            return {
                ...state,
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
            };
        default:
            return state;
    };
};

export default reducer;
