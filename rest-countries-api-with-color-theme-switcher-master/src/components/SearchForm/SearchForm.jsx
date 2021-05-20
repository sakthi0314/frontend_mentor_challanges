import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useHistory } from "react-router";
import useTheme from "../../customHooks/useTheme";
import classes from "./SearchForm.module.scss";

const SearchForm = () => {
  const searchRef = useRef("");
  const theme = useTheme();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchRef.current.value}`);
  };

  return (
    <form
      className={classes.form}
      style={{
        backgroundColor: theme.ui,
      }}
      onSubmit={handleSearch}
    >
      <span>
        <BiSearch />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        ref={searchRef}
        style={{
          color: theme.text,
        }}
      />
    </form>
  );
};

export default SearchForm;
