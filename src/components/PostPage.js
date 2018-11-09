import React, { Component } from "react";
import connect from "react-redux/src/connect/connect";
import Post from "./Post";

class PostPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <Post id={id} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, posts }, props) {
  const { id } = props.match.params;
  return {
    id
  };
}

export default connect(mapStateToProps)(PostPage);
