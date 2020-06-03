import React, { Component } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
class Default extends Component {
  state = {};
  render() {
    return (
      <Header title="404">
        <h3 className="text-white">
          The page you are looking for is not available
        </h3>
        <Link to="/">
          <button className="btn btn-lg btn-secondary my-5">
            Back to Home
          </button>
        </Link>
      </Header>
    );
  }
}

export default Default;
