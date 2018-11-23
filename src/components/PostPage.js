import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import connect from "react-redux/src/connect/connect";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import { Avatar, IconButton, Paragraph } from "evergreen-ui";
import Comment from "./Comment";
import { timestampToDate } from "../utils/helper";
import { removePost } from "../actions/posts";
import { deletePost } from "../utils/api";
import PostDetails from "./PostDetails";

class PostPage extends Component {
  state = {
    toHome: false
  };
  async handleDelete(id) {
    await deletePost(id);
    this.props.dispatch(removePost(id));
    this.setState(() => ({
      toHome: true
    }));
  }
  render() {
    const { post, postComments } = this.props;
    const { toHome } = this.state;
    if (toHome) return <Redirect to="/" />;
    return (
      <PostDetails
        post={post}
        postComments={postComments}
        toHome={toHome}
        handleDelete={this.handleDelete}
      />
    );
  }
}

function mapStateToProps({ authedUser, posts, comments }, props) {
  const { post_id } = props.match.params;
  const post = posts[post_id];
  const postComments = Object.values(comments).filter(
    comment => comment.parentId === post_id
  );
  return {
    authedUser,
    post,
    postComments
  };
}

export default connect(mapStateToProps)(PostPage);
