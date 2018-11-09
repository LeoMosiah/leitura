import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Pane } from "evergreen-ui";
import PostPage from "./PostPage";
import NewPost from "./NewPost";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Pane
          paddingTop={15}
          paddingBottom={15}
          paddingLeft={50}
          paddingRight={50}
        >
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/new" component={NewPost} />
        </Pane>
      </Router>
    );
  }
}

export default connect()(App);
