import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Navbar from "./components/Navbar/Navbar";
import Theme from "./theme/Theme";

const App = () => {
  const theme = Theme();
  document.body.style.backgroundColor = theme.bg;
  document.body.style.color = theme.text;

  return (
    <Router>
      <Navbar />
      <LoadingSpinner />
      <div className='app'>
        <Route path='/' component={Dashboard} />
      </div>
    </Router>
  );
};

export default App;
