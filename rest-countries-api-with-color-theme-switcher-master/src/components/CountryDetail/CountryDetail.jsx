import numeral from "numeral";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useTheme from "../../customHooks/useTheme";
import countryDetailAction from "../../redux/actions/countryDetailAction";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import classes from "./CountryDetail.module.scss";

const CountryDetail = () => {
  const { code } = useParams();
  const { country } = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(countryDetailAction(code));
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={classes.countryDetail}
      style={{
        backgroundColor: theme.bg,
      }}
    >
      {Object.entries(country).length === 0 && <LoadingSpinner />}
      <div className={classes["countryDetail__container"]}>
        <div className={classes["countryDetail__columnOne"]}>
          <Link
            to="/"
            className={classes["countryDetail__back"]}
            style={{
              backgroundColor: theme.ui,
              color: theme.text,
            }}
          >
            Back
          </Link>
          <div className={classes["countryDetail__flag"]}>
            <img src={country.flag} alt={country.name} />
          </div>
        </div>
        <div className={classes["countryDetail__columntwo"]}>
          <div className={classes["countryDetail__info"]}>
            <ul className={classes["countryDetail__infoListColOne"]}>
              <li>
                Native Name :<span> {country.nativeName}</span>
              </li>
              <li>
                Population :
                <span>{numeral(country.population).format("0,0")}</span>
              </li>
              <li>
                Region :<span>{country.region}</span>
              </li>
              <li>
                Sub Region :<span>{country.subregion}</span>
              </li>
              <li>
                Capital :<span>{country.capital}</span>
              </li>
            </ul>
            <ul className={classes["countryDetail__infoListColtwo"]}>
              <li>
                Top Level Domin :
                {country.topLevelDomain &&
                  country.topLevelDomain.map((top) => <span>{top.name}</span>)}
              </li>
              <li>
                Currenices
                {country.currencies &&
                  country.currencies.map((curr) => <span>{curr.name},</span>)}
              </li>
              <li>
                languages :
                {country.languages &&
                  country.languages.map((lang) => <span>{lang.name},</span>)}
              </li>
            </ul>
          </div>
          <div className={classes["countryDetail__border"]}>
            <h1>Border Countries:</h1>
            {country.borders &&
              country.borders.map((bor) => (
                <p
                  style={{
                    backgroundColor: theme.ui,
                    color: theme.text,
                  }}
                >
                  {bor}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
