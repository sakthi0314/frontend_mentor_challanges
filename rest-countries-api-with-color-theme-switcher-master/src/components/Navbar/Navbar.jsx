import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useTheme from "../../customHooks/useTheme";
import toggleThemeAction from "../../redux/actions/toggleThemeAction";
import classes from "./Navbar.module.scss";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const { isLightTheme } = useSelector((state) => state.themes);
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <nav
      className={classes.navbar}
      style={{
        backgroundColor: theme.ui,
      }}
    >
      <div className={classes["navbar__container"]}>
        <h1 className={classes["navbar__title"]}>Where in the world?</h1>
        <button
          className={classes["navbar__toggle"]}
          onClick={() => dispatch(toggleThemeAction())}
          style={{color:theme.text}}
        >
          <span>{isLightTheme ? <FaRegMoon /> : <FaMoon />}</span>
          <span>Dark mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
