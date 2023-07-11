import { actionTypes } from "./actions";

const initialState = {
    step: 0,
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
            return {
                ...state
            };
        case actionTypes.goToStep:
            return {
                ...state
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
