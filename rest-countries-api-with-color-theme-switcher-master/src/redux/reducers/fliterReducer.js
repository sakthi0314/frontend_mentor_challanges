import { actionTypes } from "../actionTypes/actionTypes";

const initial = {
  type: "all",
};

const fliterReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default fliterReducer;
