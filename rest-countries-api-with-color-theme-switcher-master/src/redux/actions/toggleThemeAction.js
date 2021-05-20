import { actionTypes } from "../actionTypes/actionTypes";

const toggleThemeAction = () => {
  return {
    type: actionTypes.TOGGLE_THEME,
  };
};

export default toggleThemeAction;
