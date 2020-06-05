import React, { Component } from "react";
import { Link } from "react-router-dom";
class Recipe extends Component {
  state = {};
  render() {
    const {
      title,
      publisher,
      source_url,
      recipe_id,
      image_url,
    } = this.props.Recipe;
    return (
      <div className="col-md-4 my-3">
        <center>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={image_url}
              alt="recipe"
              style={{ width: "286px", height: "180px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <span className="text-warning">{publisher}</span>
              </p>
            </div>
            <div className="card-footer text-center">
              <Link to={`/recipes/${recipe_id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
              <a
                href={source_url}
                className="btn btn-success mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe Url
              </a>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Recipe;
