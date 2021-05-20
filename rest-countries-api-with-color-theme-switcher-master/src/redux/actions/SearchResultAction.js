import axios from "axios";
import { actionTypes } from "../actionTypes/actionTypes";

const searchResultAction = (query) => {
  return async (dispatch) => {
    // Request Send...
    dispatch({
      type: actionTypes.REQUEST_SEND,
    });
    try {
      // Fetch data from db
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${query}`
      );

      dispatch({
        type: actionTypes.SEARCH_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      // Failure to fetch Data
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default searchResultAction;
