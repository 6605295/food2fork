import React, { Component } from "react";
class Search extends Component {
  render() {
    const { search, handleChange, handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center text-capitalize my-5 text-slanted">
              search recipes with <span className="text-orange">food2Fork</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <p className="text-capitalize mt-5 text-center text-bold">
                get best recipes here
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={search}
                  onChange={handleChange}
                  placeholder="search ingredients e.g. chicken"
                  autoComplete="off"
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-primary text-white" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
