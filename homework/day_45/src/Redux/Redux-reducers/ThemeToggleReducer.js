const initialState = {
  isLight: true,
};
const ThemeToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ThemeToggle/toggle": {
      return { ...state, isLight: !state.isLight };
    }
    default: {
      return state;
    }
  }
};
export default ThemeToggleReducer;
