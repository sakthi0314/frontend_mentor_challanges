import axios from "axios";
import { actionTypes } from "../actionTypes/actionTypes";

export const countriesAction = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_SEND,
    });
    try {
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);
      dispatch({
        type: actionTypes.FETCH_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};
