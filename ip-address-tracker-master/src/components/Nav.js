import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <Link to="/">
            <h1>CRUD</h1>
          </Link>
          <button>
            <Link to="/create" className="link">
              Create Post
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
