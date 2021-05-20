import { actionTypes } from "../actionTypes/actionTypes";

const initail = {
  isLoading: false,
  country: {},
  error: "",
};

const countryDetailReducer = (state = initail, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEND:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.MOVIE_DETAIL:
      return {
        isLoading: false,
        country: action.payload,
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

export default countryDetailReducer;
