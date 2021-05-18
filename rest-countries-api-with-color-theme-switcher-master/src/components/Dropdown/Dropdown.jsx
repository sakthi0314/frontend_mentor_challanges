import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FliterOptionAction from "../../redux/actions/FliterOptionAction";
import Theme from "../../theme/Theme";
import classes from "./Dropdown.module.scss";

const Dropdown = () => {
  const [option, setOption] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FliterOptionAction(option));
  }, [option]);

  const theme = Theme();
  const selectStyle = {
    backgroundColor: theme.ui,
    color: theme.text,
  };

  return (
    <select
      className={classes.select}
      style={selectStyle}
      onChange={(e) => setOption(e.target.value)}
    >
      <option value='all'>Fliter by region</option>
      <option value='region/africa'>Africa</option>
      <option value='region/americas'>Americas</option>
      <option value='region/europe'>Asia</option>
      <option value='region/oceania'>Oceania</option>
    </select>
  );
};

export default Dropdown;
