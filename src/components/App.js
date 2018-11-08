import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Pane } from "evergreen-ui";
import * as API from "../utils/api";

class App extends Component {
  state = {
    categories: [],
    dialogIsShown: false
  };
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
    this.setState({
      categories: await API.getCategories()
    });
  }
  handleOpenDialog() {
    this.setState({
      dialogIsShown: true
    });
  }
  handleCloseDialog() {
    this.setState({
      dialogIsShown: false
    });
  }
  render() {
    const { categories, dialogIsShown } = this.state;
    return (
      <Pane
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={50}
        paddingRight={50}
      >
        <Home
          categories={categories}
          handleOpenDialog={() => this.handleOpenDialog()}
          handleCloseDialog={() => this.handleCloseDialog()}
          dialogIsShown={dialogIsShown}
        />
      </Pane>
    );
  }
}

export default connect()(App);
