
export const actionTypes = {
    move: "MOVE",
    goToStep: "GOTOSTEP",
    gameOver: "GAMEOVER",
};

export const actions = {
    move: (square) => {return { type: actionTypes.move, square }},
    goToStep: (step) => {return { type: actionTypes.goToStep, step }},
    gameOver: () => {return { type: actionTypes.gameOver}},
};
