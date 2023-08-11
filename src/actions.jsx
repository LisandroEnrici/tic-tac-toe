
export const actionTypes = {
    move: "MOVE",
    goToStep: "GOTOSTEP",
};

export const actions = {
    move: (square) => {return { type: actionTypes.move, square }},
    goToStep: (step) => {return { type: actionTypes.goToStep, step }},
};
