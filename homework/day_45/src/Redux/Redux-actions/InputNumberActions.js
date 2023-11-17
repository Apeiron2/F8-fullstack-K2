export const inputIncrement = () => {
  return { type: "InputNumber/increment", payload: 1 };
};
export const inputDecrement = () => {
  return { type: "InputNumber/decrement", payload: 1 };
};
export const inputUpdate = (value) => {
  return { type: "InputNumber/update", payload: value };
};
