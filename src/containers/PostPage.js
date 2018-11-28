import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import connect from "react-redux/src/connect/connect";
import { removePost } from "../actions/posts";
import {
  deleteComment,
  saveComment,
  voteComment,
  votePost,
  deletePost,
  changeComment
} from "../utils/api";
import PostDetails from "../components/PostDetails";
import { generateUUID } from "../utils/helper";
import {
  decrementVotescore,
  incrementVotescore,
  togglePost
} from "../actions/posts";
import {
  addComment,
  removeComment,
  toggleComment,
  updateComment
} from "../actions/comments";
import * as PropTypes from "prop-types";

class PostPage extends Component {
  state = {
    body: ""
  };
  handleDelete = async id => {
    const { post, authedUser, dispatch } = this.props;
    dispatch(removeComment(id));
    await deleteComment(id);
    dispatch(decrementVotescore(post));
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
    dispatch(incrementVotescore(post));
    this.setState({
      body: ""
    });
    await saveComment(comment);
  };
  handleVoteComment = async (comment, option) => {
    this.props.dispatch(toggleComment(comment, option));
    await voteComment(comment.id, option);
  };
  handleVotePost = async (post, option) => {
    this.props.dispatch(togglePost(post, option));
    await votePost(post.id, option);
  };
  handleDeletePost = async (e, id) => {
    e.preventDefault();
    this.props.dispatch(removePost(id));
    await deletePost(id);
  };
  handleUpdateComment = async comment => {
    this.props.dispatch(updateComment(comment));
    await changeComment(comment.id, comment.body);
  };
  render() {
    const { post, postComments, authedUser } = this.props;
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
        handleVoteComment={this.handleVoteComment}
        handleVotePost={this.handleVotePost}
        comment={body}
        authedUser={authedUser}
        handleDeletePost={this.handleDeletePost}
        handleUpdateComment={this.handleUpdateComment}
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

PostPage.propTypes = {
  authedUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  postComments: PropTypes.object.isRequired
};
