export const count = (value = 1) => {
  return {
    type: "Counter/count",
    payload: value,
  };
};

export const setMaxTime = (maxValue) => {
  const maxTime = Math.ceil(Math.log2(maxValue));
  return {
    type: "Counter/setMaxTime",
    payload: maxTime,
  };
};
