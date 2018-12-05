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
import Header from "../components/Header";
import { unsetAuthedUser } from "../actions/authedUser";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  handleSignOut = () => {
    this.props.dispatch(unsetAuthedUser());
  };
  render() {
    return (
      <React.Fragment>
        <Header
          authedUser={this.props.authedUser}
          handleSignOut={this.handleSignOut}
        />
        <Switch>
          <Route exact path="/post/new" component={NewPost} />
          <Route exact path="/signIn" component={SignInContainer} />
          <Route exact path="/:category?" component={Home} />
          <Route exact path="/:category/:post_id" component={PostPage} />
          <Route exact path="/post/edit/:post_id" component={EditPost} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(App));

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};
