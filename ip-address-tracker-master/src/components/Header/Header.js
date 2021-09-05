import React, { Component } from "react";
import arrow from "../../assets/icon-arrow.svg";
// import { getData } from "../../services";
import { MapStructer } from "../Map/MapStructer";
import classes from "./Header.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searchValue: "",
      showResult: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // const result = await getData(this.state.searchValue);
    // this.setState({ data: result });

    // Show result
    this.setState({ showResult: true });

    // Clear Field
    this.setState({ searchValue: "" });
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div>
        <header className={classes.header}>
          <div className={classes["header__container"]}>
            <div className={classes["header__logo"]}>IP Address Tracker</div>
            <form
              className={classes["header__form"]}
              onSubmit={this.handleSubmit}
            >
              <div className={classes["header__input"]}>
                <input
                  type="text"
                  value={this.state.searchValue}
                  placeholder="Search for any IP address or domin"
                  onChange={this.handleChange}
                />
              </div>
              <div className={classes["header__submit"]}>
                <button className="btn">
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </form>

            <div
              className={classes["header__result"]}
              style={{ display: !this.state.showResult && "none" }}
            >
              <ul>
                <li>
                  <h4>IP ADDRESS</h4>
                  <h2>{this.state.data.ip}</h2>
                </li>
                <li>
                  <h4>LOCATION</h4>
                  <h2>{`${this.state.data.location?.city} ${this.state.data.location?.region}`}</h2>
                </li>
                <li>
                  <h4>TIMZONE</h4>
                  <h2>{this.state.data.location?.timezone}</h2>
                </li>
                <li>
                  <h4>IPS</h4>
                  <h2>{this.state.data.isp}</h2>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <MapStructer
          position={[
            this.state.data.location?.lat,
            this.state.data.location?.lng,
          ]}
        />
      </div>
    );
  }
}

export { Header };
