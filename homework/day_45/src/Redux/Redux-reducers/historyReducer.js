const initialState = {
  histories: [],
  currentTurn: [],
};
const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "History/currentTurn/update": {
      return { ...state, currentTurn: [...state.currentTurn, action.payload] };
    }
    case "History/currentTurn/reset": {
      return { ...state, currentTurn: [] };
    }
    case "History/histories/update": {
      return {
        ...state,
        histories: [
          ...state.histories,
          { maxTime: action.payload, times: state.currentTurn },
        ],
        currentTurn: [],
      };
    }
    default: {
      return state;
    }
  }
};
export default HistoryReducer;
