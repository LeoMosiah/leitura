import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import connect from "react-redux/src/connect/connect";
import { deleteComment, saveComment, voteComment } from "../utils/api";
import PostDetails from "./PostDetails";
import { generateUUID } from "../utils/helper";
import { addComment, removeComment, toggleComment } from "../actions/comments";

class PostPage extends Component {
  state = {
    body: ""
  };
  handleDelete = async id => {
    this.props.dispatch(removeComment(id));
    await deleteComment(id);
  };
  handleChange = string => {
    let text = string;
    this.setState({
      body: text
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { post, authedUser, dispatch } = this.props;
    const { body } = this.state;
    const comment = {
      id: generateUUID(),
      timestamp: Date.now(),
      body,
      author: authedUser,
      parentId: post.id,
      voteScore: 0
    };
    dispatch(addComment(comment));
    this.setState({
      body: ""
    });
    await saveComment(comment);
  };
  handleVote = async (comment, option) => {
    this.props.dispatch(toggleComment(comment, option));
    await voteComment(comment.id, option);
  };
  render() {
    const { post, postComments } = this.props;
    const { toHome, body } = this.state;
    if (toHome) return <Redirect to="/" />;
    return (
      <PostDetails
        post={post}
        postComments={postComments}
        toHome={toHome}
        handleDelete={this.handleDelete}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleVote={this.handleVote}
        comment={body}
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
