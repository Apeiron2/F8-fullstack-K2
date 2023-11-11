const initialState = {
  messages: [],
};
const reducer = (state, action = {}) => {
  switch (action.type) {
    case "message/update": {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case "chat/fetchMessages": {
      return { ...state, messages: action.payload };
    }
    default:
      return state;
  }
};
export { initialState, reducer };
