const initialState = {
  answer: null,
  guess: "",
};
const InputNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "InputNumberReducer/update": {
      return { ...state, guess: action.payload };
    }
    default:
      return state;
  }
};
export default InputNumberReducer;
