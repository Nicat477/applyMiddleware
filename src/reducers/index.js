const INITIAL_STATE = {
  isloading: false,
  countries: [],
  message: ""
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES_START":
      return { ...state, isloading: true, message: "" };
    case "GET_COUNTRIES_SUCCEES":
      return { ...state, countries: action.payload, isloading: false };
    case "GET_COUNTRIES_ERROR":
      return { ...state, message: action.payload, isloading: false };
    default:
      return state;
  }
};
