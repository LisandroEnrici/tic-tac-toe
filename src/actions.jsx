
export const actionTypes = {
    move: "MOVE",
    goToStep: "GOTOSTEP",
    gameOver: "GAMEOVER",
};

export const actions = {
    move: (player, square) => {return { type: actionTypes.move, player, square }},
    goToStep: (step) => {return { type: actionTypes.goToStep, step }},
    gameOver: (winner) => {return { type: actionTypes.gameOver, winner}},
};
