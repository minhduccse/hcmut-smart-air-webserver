import React, { Component } from "react";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Fire from "./components/Fire";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default App;
