import React, { Component } from "react";
import connect from "react-redux/src/connect/connect";
import Post from "./Post";

class PostPage extends Component {
  render() {
    const { post_id } = this.props;
    return (
      <div>
        <Post id={post_id} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, posts }, props) {
  const { post_id } = props.match.params;
  return {
    post_id
  };
}

export default connect(mapStateToProps)(PostPage);
