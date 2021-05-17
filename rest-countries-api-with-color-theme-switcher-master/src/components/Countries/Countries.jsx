import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import countriesAction from "../../redux/actions/countriesAction";
import classes from "./Countries.module.scss";
const Countries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesAction());
  }, []);
  return <div></div>;
};

export default Countries;
