import { actionTypes } from "../actionTypes/actionTypes";

const initail = {
  type: "",
};
const filterOptionReducer = (state = initail, action) => {
  switch (action.type) {
    case actionTypes.FILTER_OPTION:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
};

export default filterOptionReducer;
