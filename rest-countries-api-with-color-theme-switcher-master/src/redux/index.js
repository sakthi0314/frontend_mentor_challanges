import { combineReducers } from "redux";
import countriesReducer from "./reducers/countriesReducer";
import filterOptionReducer from "./reducers/filterOptionReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  option: filterOptionReducer,
});

export default rootReducer;
