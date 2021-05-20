import axios from "axios";
import { actionTypes } from "../actionTypes/actionTypes";

const countryDetailAction = (code) => {
  return async (dispatch) => {
    // Request Sending...
    dispatch({
      type: actionTypes.REQUEST_SEND,
    });

    try {
      // Fetch Data from db
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      );
      dispatch({
        type: actionTypes.MOVIE_DETAIL,
        payload: data,
      });
    } catch (error) {
      // Failure to fetch data
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default countryDetailAction;
