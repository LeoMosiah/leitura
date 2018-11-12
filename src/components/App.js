import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
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
      <Pane
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={50}
        paddingRight={50}
        background="greenTint"
      >
        <Route exact path="/" component={Home} />
        <Route path="/:category/:post_id" component={PostPage} />
        <Route path="/new" component={NewPost} />
      </Pane>
    );
  }
}

export default withRouter(connect()(App));
