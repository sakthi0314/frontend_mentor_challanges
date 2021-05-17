import { combineReducers } from "redux";
import countriesReducer from "./reducers/countriesReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});

export default rootReducer;
