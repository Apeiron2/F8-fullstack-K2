const initialState = {
  todos: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/fetch": {
      return { ...state, todos: action.payload };
    }
    default: {
      return state;
    }
  }
};
