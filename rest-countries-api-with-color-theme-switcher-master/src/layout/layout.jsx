import React from "react";
import Countries from "../components/Countries/Countries";
import Dropdown from "../components/Dropdown/Dropdown";
import SearchForm from "../components/SearchForm/SearchForm";
import classes from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes["layout__container"]}>
        <div className={classes["layout__fliter"]}>
          <div className={classes["layout__fliterOne"]}>
            <SearchForm />
          </div>

          <div className={classes["layout__fliterTwo"]}>
            <Dropdown />
          </div>
        </div>
        <div className={classes["layout__countries"]}>
          <Countries />
        </div>
      </div>
    </div>
  );
};

export default Layout;
