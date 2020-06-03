import React, { Component } from "react";
import Recipe from "./Recipe";
class RecipeList extends Component {
  state = {};
  render() {
    const { recipes } = this.props;
    return (
      <div className="container my-5">
        <div className="row">
          {recipes.map((recipe, index) => (
            <Recipe key={index} Recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeList;
