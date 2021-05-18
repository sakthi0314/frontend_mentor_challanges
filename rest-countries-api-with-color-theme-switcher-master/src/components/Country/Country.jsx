import numeral from "numeral";
import React from "react";
import Theme from "../../theme/Theme";
import classes from "./Country.module.scss";

const Country = ({ name, flag, region, population, capital }) => {
  const theme = Theme();

  const cardStyles = {
    color: theme.color,
    backgroundColor: theme.ui,
  };
  return (
    <div className={classes.country} style={cardStyles}>
      <div
        className={classes["country__flag"]}
        style={{
          backgroundImage: `url(${flag})`,
        }}
      ></div>
      <div className={classes["country__info"]}>
        <h1>{name}</h1>
        <p>
          Region:<span>{region}</span>
        </p>
        <p>
          Population:<span>{numeral(population).format("0,0")}</span>
        </p>
        <p>
          Capital:<span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
