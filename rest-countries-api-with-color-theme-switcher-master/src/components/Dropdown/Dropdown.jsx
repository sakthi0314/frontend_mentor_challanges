import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useTheme from "../../customHooks/useTheme";
import fliterAction from "../../redux/actions/fliterAction";
import classes from "./Dropdown.module.scss";

const Dropdown = () => {
  const [option, setOption] = useState("all");
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fliterAction(option));
    // eslint-disable-next-line
  }, [option]);

  return (
    <select
      name="filter"
      className={classes.select}
      onChange={(e) => setOption(e.target.value)}
      style={{
        background: theme.ui,
        color: theme.text,
      }}
    >
      <option value="all">Fliter by region</option>
      <option value="region/Asia">Asia</option>
      <option value="region/Americas">America</option>
      <option value="region/Europe">Europe</option>
      <option value="region/Oceania">Oceania</option>
    </select>
  );
};

export default Dropdown;
