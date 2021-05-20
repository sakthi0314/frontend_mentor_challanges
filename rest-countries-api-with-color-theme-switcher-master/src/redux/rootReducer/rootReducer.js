import { combineReducers } from "redux";
import countriesReducer from "../reducers/countriesReducer";
import countryDetailReducer from "../reducers/countryDetailReducer";
import fliterReducer from "../reducers/fliterReducer";
import themeReducer from "../reducers/themeReducer";
import SearchResultReducer from "../reducers/SearchResultReducer";

const rootReducer = combineReducers({
  themes: themeReducer,
  filter: fliterReducer,
  country: countriesReducer,
  countryDetail: countryDetailReducer,
  searchResult: SearchResultReducer,
});

export default rootReducer;
