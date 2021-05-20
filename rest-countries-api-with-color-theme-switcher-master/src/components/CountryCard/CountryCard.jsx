import React from "react";
import numeral from "numeral";
import classes from "./CountryCard.module.scss";
import useTheme from "../../customHooks/useTheme";
import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  flag,
  capital,
  population,
  region,
  alpha2Code,
}) => {
  const theme = useTheme();
  return (
    <Link
      to={`/country/${alpha2Code}`}
      className={classes.countryCard}
      style={{
        backgroundColor: theme.ui,
        color: theme.text,
      }}
    >
      <div
        className={classes["countryCard__flag"]}
        style={{
          backgroundImage: `url(${flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={classes["countryCard__info"]}>
        <h1>{name}</h1>
        <p>
          Population:
          <span>{numeral(population).format("0,0")}</span>
        </p>
        <p>
          Region:
          <span>{region}</span>
        </p>
        <p>
          Capital:
          <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
