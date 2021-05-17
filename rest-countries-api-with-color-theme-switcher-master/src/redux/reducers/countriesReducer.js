import { actionTypes } from "../actionTypes/actionTypes";

const initailState = {
  isLoading: false,
  countries: [],
  error: "",
};

const countriesReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEND:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_ALL_COUNTRIES:
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
      };
    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
