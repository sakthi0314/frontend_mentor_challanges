import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import countriesAction from "../../redux/actions/countriesAction";
import CountryCard from "../CountryCard/CountryCard";
import classes from "./Countries.module.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllCountries = () => {
  const { type } = useSelector((state) => state.filter);
  const { countries } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesAction(type));
    // eslint-disable-next-line
  }, [type]);
  return (
    <div className={classes.countries}>
      {countries.length === 0 && <LoadingSpinner />}
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          flag={country.flag}
          capital={country.capital}
          region={country.region}
          population={country.population}
          alpha2Code={country.alpha2Code}
        />
      ))}
    </div>
  );
};

export default AllCountries;
