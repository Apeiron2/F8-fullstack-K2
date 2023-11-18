const initialState = {
  maxTime: 11,
  times: 0,
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Counter/count": {
      return { ...state, times: state.times * action.payload + action.payload };
    }
    case "Counter/setMaxTime": {
      return { ...state, maxTime: action.payload };
    }
    default:
      return state;
  }
};
export default CounterReducer;
