export const updateTurn = (value) => {
  return {
    type: "History/currentTurn/update",
    payload: value,
  };
};
export const resetTurn = () => {
  return {
    type: "History/currentTurn/reset",
    payload: true,
  };
};
export const updateHistories = (maxTime) => {
  return {
    type: "History/histories/update",
    payload: maxTime,
  };
};
