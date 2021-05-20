import { actionTypes } from "../actionTypes/actionTypes";

const initial = {
  isLoading: false,
  searchResult: [],
  error: "",
};

const SearchResultReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEND:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SEARCH_COUNTRIES:
      return {
        isLoading: false,
        searchResult: action.payload,
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

export default SearchResultReducer;
