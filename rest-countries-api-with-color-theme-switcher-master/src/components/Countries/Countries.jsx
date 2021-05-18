import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesAction } from "../../redux/actions/countriesAction";
import Country from "../Country/Country";
import classes from "./Countries.module.scss";
const Countries = () => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log(countries);
  useEffect(() => {
    dispatch(countriesAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.countries}>
      {countries.map((country) => (
        <Country
          key={country.name}
          name={country.name}
          flag={country.flag}
          region={country.region}
          population={country.population}
          capital={country}
        />
      ))}
    </div>
  );
};

export default Countries;
