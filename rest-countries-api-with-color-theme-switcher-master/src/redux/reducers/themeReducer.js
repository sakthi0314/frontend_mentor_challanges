import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  isLightTheme: true,
  light: {
    text: "hsl(200, 15%, 8%)",
    ui: "hsl(0, 0%, 100%)",
    bg: "hsl(0, 0%, 98%)",
  },
  dark: {
    text: "hsl(0, 0%, 100%)",
    ui: "hsl(209, 23%, 22%)",
    bg: "hsl(207, 26%, 17%)",
  },
};

const themeReducer = (state = initialState,action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };

    default:
      return state;
  }
};

export default themeReducer;
