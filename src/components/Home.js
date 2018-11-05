import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import Header from "./Header"
import Main from "./Main"

class Home extends Component {
  render() {
    return (
      <Pane>
          <Header/>
          <Main/>
      </Pane>
    );
  }
}

export default Home;
