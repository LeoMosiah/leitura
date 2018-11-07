import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Pane } from "evergreen-ui";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.state.categories);
    return (
      <Pane
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={50}
        paddingRight={50}
      >
        <Home categories={this.state.categories} />
      </Pane>
    );
  }
}

export default connect()(App);
