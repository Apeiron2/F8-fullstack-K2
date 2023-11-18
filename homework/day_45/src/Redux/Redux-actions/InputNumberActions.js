export const inputIncrement = () => {
  return { type: "InputNumber/increment", payload: 1 };
};
export const inputDecrement = () => {
  return { type: "InputNumber/decrement", payload: 1 };
};
export const inputUpdate = (value) => {
  return { type: "InputNumber/update", payload: value };
};
export const setAnswer = (maxValue) => {
  const answer = Math.floor(Math.random() * maxValue + 1);
  return { type: "InputNumber/setAnswer", payload: answer };
};
export const setMaxValue = (value) => {
  return { type: "InputNumber/setMaxValue", payload: value };
};
export const setStatus = (minus) => {
  const status = minus === null ? null : minus === 0 ? 0 : minus < 0 ? -1 : 1;
  return { type: "InputNumber/setStatus", payload: status };
};
