import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import App from "./App";
import store from "./redux/store/store";
import "./styles/reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
