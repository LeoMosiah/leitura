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
  togglePost,
  decrementCommentcount,
  incrementCommentcount
} from "../actions/posts";
import {
  addComment,
  removeComment,
  toggleComment,
  updateComment
} from "../actions/comments";
import * as PropTypes from "prop-types";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

class PostPage extends Component {
  state = {
    body: "",
    isEditing: false
  };
  postCallbackHandler = async (type, data) => {
    switch (type) {
      case "vote":
        this.props.dispatch(togglePost(data.post, data.option));
        await votePost(data.post.id, data.option);
      case "delete":
        this.props.dispatch(removePost(data));
        await deletePost(data);
    }
  };
  commentCallbackHandler = async (type, data) => {
    switch (type) {
      case "delete":
        this.props.dispatch(removeComment(data.id));
        await deleteComment(data.id);
        this.props.dispatch(decrementCommentcount(this.props.post));
      case "vote":
        this.props.dispatch(toggleComment(data.comment, data.option));
        await voteComment(data.comment.id, data.option);
      case "submit":
        const { body } = this.state;
        const comment = {
          id: generateUUID(),
          timestamp: Date.now(),
          body,
          author: this.props.authedUser,
          parentId: this.props.post.id,
          voteScore: 0
        };
        this.props.dispatch(addComment(comment));
        this.props.dispatch(incrementCommentcount(this.props.post));
        this.setState({
          body: ""
        });
        await saveComment(comment);
      case "change":
        this.setState({
          body: data
        });
    }
  };
  handleChange = string => {
    this.setState({
      body: string
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
    dispatch(incrementCommentcount(post));
    this.setState({
      body: ""
    });
    await saveComment(comment);
  };
  render() {
    const { post, postComments, authedUser } = this.props;
    const { toHome, body } = this.state;
    if (toHome) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <PostDetails
          post={post}
          toHome={toHome}
          authedUser={authedUser}
          postCallbackHandler={this.postCallbackHandler}
        />
        <CommentsList
          postComments={postComments}
          commentCallbackHandler={this.commentCallbackHandler}
        />
        <CommentForm
          commentCallbackHandler={this.commentCallbackHandler}
          comment={this.state.body}
        />
      </React.Fragment>
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
