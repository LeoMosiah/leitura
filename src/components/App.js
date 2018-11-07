import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import * as API from "../utils/api";
import { Pane } from "evergreen-ui";

class App extends Component {
  state = {
    categories: []
  };
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
    this.setState({ categories: await API.getCategories() });
  }

  render() {
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
