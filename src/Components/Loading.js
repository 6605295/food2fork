import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: true,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <ReactLoading
              type={"bars"}
              color={"black"}
              className="mx-auto my-5"
            />
          </div>
        </div>
      </div>
    );
  }
}
