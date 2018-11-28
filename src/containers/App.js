import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import * as PropTypes from "prop-types";
import EditPost from "./EditPost";
import { setAuthedUser } from "../actions/authedUser";
import SignIn from "../components/SignIn";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  handleSingIn = () => {
    this.props.dispatch(setAuthedUser("LeoMosiah"));
  };
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/:category/:post_id" component={PostPage} />
        <Route exact path="/new" component={NewPost} />
        <Route exact path="/post/edit/:post_id" component={EditPost} />
        <Route
          exact
          path="/signIn"
          render={() => <SignIn handleSingIn={this.handleSingIn} />}
        />
      </div>
    );
  }
}

export default withRouter(connect()(App));

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};
