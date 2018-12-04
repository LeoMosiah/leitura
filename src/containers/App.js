import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import * as PropTypes from "prop-types";
import EditPost from "./EditPost";
import PageNotFound from "../components/PageNotFound";
import SignInContainer from "./SignInContainer";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Switch>
        <Route exact path="/post/new" component={NewPost} />
        <Route exact path="/signIn" component={SignInContainer} />
        <Route exact path="/:category?" component={Home} />
        <Route exact path="/:category/:post_id" component={PostPage} />
        <Route exact path="/post/edit/:post_id" component={EditPost} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default withRouter(connect()(App));

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};
