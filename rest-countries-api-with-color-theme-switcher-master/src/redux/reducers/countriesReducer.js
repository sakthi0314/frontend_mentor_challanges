import { actionTypes } from "../actionTypes/actionTypes";

const initail = {
  isLoading: false,
  countries: [],
  error: "",
};

const countriesReducer = (state = initail, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEND:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_COUNTRIES:
      return {
        isLoading: false,
        countries: action.payload,
        error: "",
      };
    case actionTypes.REQUEST_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
