import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import classes from "../Countries/Countries.module.scss";
import SearchResultAction from "../../redux/actions/SearchResultAction";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CountryCard from "../CountryCard/CountryCard";

const SearchResult = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { searchResult } = useSelector((state) => state.searchResult);

  useEffect(() => {
    dispatch(SearchResultAction(country));
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div className={classes.countries}>
          {searchResult.length === 0 && <LoadingSpinner />}
          {searchResult &&
            searchResult.map((cou) => (
              <CountryCard
                key={cou.name}
                name={cou.name}
                flag={cou.flag}
                capital={cou.capital}
                region={cou.region}
                population={cou.population}
                alpha2Code={cou.alpha2Code}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
