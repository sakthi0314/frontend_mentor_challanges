import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import Theme from "../../theme/Theme";
import classes from "./SearchForm.module.scss";

const SearchForm = () => {
  const theme = Theme();
  const inputRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  const formStyles = {
    backgroundColor: theme.ui,
  };

  const formIcon = {
    color: theme.text,
  };

  const input = {
    color: theme.text,
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form} style={formStyles}>
      <span style={formIcon}>
        <BsSearch />
      </span>
      <input
        type='text'
        placeholder='Search for a country...'
        ref={inputRef}
        style={input}
      />
    </form>
  );
};

export default SearchForm;
