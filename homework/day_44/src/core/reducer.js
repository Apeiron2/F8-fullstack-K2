export const initialState = {
  isLogin: false,
  isLoading: false,
  profile: null,
  emailjsService: {
    serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    tempalteID: import.meta.env.VITE_EMAILJS_TEMPLATE,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
};
export const reducer = (state, action = {}) => {
  switch (action.type) {
    case "loading": {
      return { ...state, isLoading: action.payload };
    }
    case "login": {
      return { ...state, isLogin: action.payload };
    }
    default:
      break;
  }
};
