import React, { Component } from "react";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";

class Singlerecipepage extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      // recipe: recipeData,
      recipe: {},
      id,
      loading: true,
    };
  }
  async componentDidMount() {
    //error Access to fetch at 'https://recipesapi.herokuapp.com/api/get?rId=1f69b4' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    //solution is add this proxy url

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://recipesapi.herokuapp.com/api/get?rId=${this.state.id}`;
    try {
      const response = await fetch(proxyurl + url);
      const responseData = await response.json();

      this.setState({
        recipe: responseData.recipe,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {
      publisher,
      title,
      image_url,
      ingredients,
      publisher_url,
      source_url,
    } = this.state.recipe;

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <Link to="/recipes">
              <button className="btn btn-warning text-capitalize">
                back to recipe list
              </button>
              <img
                src={image_url}
                alt="recipe"
                className="my-5"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <div className="col-md-6">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="txet-capitalize text-warning">{publisher}</h6>
            <a
              href={publisher_url}
              rel="noopener noreferrer"
              className="btn btn-primary"
              target="_blank"
            >
              Publisher Webpage
            </a>
            <a
              href={source_url}
              rel="noopener noreferrer"
              className="btn btn-success mx-2"
              target="_blank"
            >
              Recipe Url
            </a>
            <ul className="list-group mt-4">
              <h4>Ingredients</h4>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Singlerecipepage;
