import React, { Component } from "react";
class Header extends Component {
  render() {
    const { title, children, styleClass } = this.props;
    return (
      <div className="container-fluid">
        <div className={`row align-item-center ${styleClass}`}>
          <div className="col-md-12 mx-auto text-center my-auto">
            <h1 className=" text-light text-capitalize text-slanted display-3 letter-spacing">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Default Props",
  styleClass: "Defaultbackground",
};

export default Header;
