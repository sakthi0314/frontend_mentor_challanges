import React from "react";
import AllCountries from "../Countries/AllCountries";
import Dropdown from "../Dropdown/Dropdown";
import SearchForm from "../SearchForm/SearchForm";
import classes from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <div className={classes["dashboard__container"]}>
        <div className={classes.columnOne}>
          <SearchForm />
          <Dropdown />
        </div>
        <div className={classes.columnTwo}>
          <AllCountries />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
