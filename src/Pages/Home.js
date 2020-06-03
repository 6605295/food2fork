import React, { Component } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <Header title="Amazing Recipes" styleClass="Homebackground">
        <Link to="/recipes">
          <button className="btn btn-lg btn-secondary my-5">
            Explore Recipes
          </button>
        </Link>
      </Header>
    );
  }
}

export default Home;
