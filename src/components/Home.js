import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import Header from "./Header";
import Main from "./Main";

class Home extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Pane>
        <Header categories={categories} />
        <Main />
      </Pane>
    );
  }
}

export default Home;
