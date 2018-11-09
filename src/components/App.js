import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import PostPage from "./PostPage";
import { Pane } from "evergreen-ui";
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
          <Route path="/:category/:post_id" component={PostPage} />
          <Route path="/new" component={NewPost} />
        </Pane>
      </Router>
    );
  }
}

export default connect()(App);
