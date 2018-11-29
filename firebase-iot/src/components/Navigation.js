import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Smart Air Dashboard
          </a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
