import axios from "axios";
import { actionTypes } from "../actionTypes/actionTypes";

export const countriesAction = (type) => {
  return async (dispatch) => {
    // Request sending...
    dispatch({
      type: actionTypes.REQUEST_SEND,
    });

    try {
      // Fetch data from db
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/${type}`
      );

      dispatch({
        type: actionTypes.GET_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      // If there is issuse It will be failure
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default countriesAction;
