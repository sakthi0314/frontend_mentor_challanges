import React from "react";
import classes from "./Navbar.module.scss";
import Theme from "../../theme/Theme";
import { themeToggleAction } from "../../redux/actions/themeAction";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const theme = Theme();
  const dispatch = useDispatch();

  // Navbar inline styles
  const navbarStyles = {
    backgroundColor: theme.ui,
    color: theme.text,
  };

  const buttonStyles = {
    color: theme.text,
  };

  return (
    <nav className={classes.navbar} style={navbarStyles}>
      <div className={classes["navbar__container"]}>
        <h1 className={classes["navbar__title"]}>Where in the world?</h1>
        <button
          onClick={() => dispatch(themeToggleAction())}
          className={classes["navbar__toggle"]}
          style={buttonStyles}
        >
          <span>{isLightTheme ? <FaRegMoon /> : <FaMoon />}</span>
          <span>Dark mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
