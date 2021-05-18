import { actionTypes } from "../actionTypes/actionTypes";

const FliterOptionAction = (type) => {
  return {
    type: actionTypes.FILTER_OPTION,
    payload: type,
  };
};

export default FliterOptionAction;
