import React, { Component } from "react";
import Search from "../Components/Search";
import RecipeList from "../Components/RecipeList";
class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: "",
      url: "https://recipesapi.herokuapp.com/api/search",
      base_url: "https://recipesapi.herokuapp.com/api/search",
      query: "?q=",
      error: "",
    };
    this.getrecipeData = this.getrecipeData.bind(this);
  }
  async getrecipeData() {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const response = await fetch(proxyurl + this.state.url);
      const jsondata = await response.json();
      if (jsondata.recipes.length === 0) {
        this.setState({
          error:
            "sorry but your search did not return any recipes, please try again or press search icon for the most popular recipes",
        });
      } else {
        this.setState({ recipes: jsondata.recipes, error: "" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getrecipeData();
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, query, search } = this.state;

    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: "",
      },
      () => this.getrecipeData()
    );
  };
  render() {
    return (
      <React.Fragment>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-Capitalize my-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes}></RecipeList>
        )}
      </React.Fragment>
    );
  }
}

export default Recipes;
