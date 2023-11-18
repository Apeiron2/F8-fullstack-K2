export const updateTurn = (value) => {
  return {
    type: "History/currentTurn/update",
    payload: value,
  };
};
export const updateHistories = (maxTime) => {
  return {
    type: "History/histories/update",
    payload: maxTime,
  };
};
