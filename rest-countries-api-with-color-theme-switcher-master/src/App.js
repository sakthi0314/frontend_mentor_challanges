import React from "react";
import useTheme from "./customHooks/useTheme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import CountryDetailPage from "./Pages/CountryDetailPage";
import SearchResult from "./components/SearchResult/SearchResult";
const App = () => {
  const theme = useTheme();
  document.body.style.backgroundColor = theme.bg;
  document.body.style.color = theme.text;
  return (
    <Router>
      <Navbar />

      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:code" component={CountryDetailPage} />
          <Route path="/search/:country" component={SearchResult} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
