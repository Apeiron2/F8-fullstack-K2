const initialState = {
  maxValue: 600,
  answer: 10,
  guess: "",
  status: null,
};
const InputNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "InputNumber/update": {
      return { ...state, guess: action.payload };
    }
    case "InputNumber/setAnswer": {
      return { ...state, answer: action.payload };
    }
    case "InputNumber/setMaxValue": {
      return { ...state, maxValue: action.payload };
    }
    case "InputNumber/setStatus": {
      return { ...state, status: action.payload };
    }
    default:
      return state;
  }
};
export default InputNumberReducer;
