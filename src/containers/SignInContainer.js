import React, { Component } from "react";
import { setAuthedUser } from "../actions/authedUser";
import SignIn from "../components/SignIn";
import { connect } from "react-redux";

class SignInContainer extends Component {
  state = {
    username: "",
    toHome: false
  };
  handleSingIn = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.username));
    this.setState({
      toHome: !this.state.toHome
    });
  };
  handleChange = username => {
    this.setState({ username });
  };
  render() {
    return (
      <SignIn
        handleSingIn={this.handleSingIn}
        handleChange={this.handleChange}
        username={this.state.username}
        toHome={this.state.toHome}
      />
    );
  }
}

export default connect()(SignInContainer);
