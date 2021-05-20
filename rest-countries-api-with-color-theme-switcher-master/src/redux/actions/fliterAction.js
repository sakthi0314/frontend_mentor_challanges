import { actionTypes } from "../actionTypes/actionTypes";

const fliterAction = (type) => {
  return {
    type: actionTypes.FILTER,
    payload: type,
  };
};

export default fliterAction;
