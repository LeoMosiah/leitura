import React, { Component } from "react";
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
import { Redirect } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";

class PostPage extends Component {
  state = {
    body: "",
    isEditing: false,
    commentToChange: {},
    modalIsOpen: false
  };
  getNewComment = () => {
    return {
      id: generateUUID(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.props.authedUser,
      parentId: this.props.post.id,
      voteScore: 0
    };
  };
  postCallbackHandler = async (type, data) => {
    switch (type) {
      case "vote":
        this.props.dispatch(togglePost(data.post, data.option));
        await votePost(data.post.id, data.option);
        break;
      case "delete":
        this.props.dispatch(removePost(data));
        this.setState({
          toHome: true
        });
        await deletePost(data);
        break;
      default:
        break;
    }
  };
  commentCallbackHandler = async (type, data) => {
    switch (type) {
      case "delete":
        this.props.dispatch(removeComment(data.id));
        await deleteComment(data.id);
        this.props.dispatch(decrementCommentcount(this.props.post));
        break;
      case "vote":
        this.props.dispatch(toggleComment(data.comment, data.option));
        await voteComment(data.comment.id, data.option);
        break;
      case "submit":
        if (this.props.authedUser) {
          this.props.dispatch(addComment(this.getNewComment()));
          this.props.dispatch(incrementCommentcount(this.props.post));
          this.setState({
            body: ""
          });
          await saveComment(this.getNewComment());
        } else this.handleOpenModal();
        break;
      case "change":
        this.setState({
          body: data
        });
        break;
      case "edit":
        this.setState({
          isEditing: !this.state.isEditing,
          body: !this.state.isEditing ? data.body : "",
          commentToChange: data
        });
        break;
      case "update":
        const { commentToChange } = this.state;
        const commentUpdated = {
          ...commentToChange,
          timestamp: Date.now(),
          body: this.state.body
        };
        this.props.dispatch(updateComment(commentUpdated));
        this.setState({
          isEditing: false,
          body: "",
          commentToChange: {}
        });
        await changeComment(commentUpdated.id, commentUpdated.body);
        break;
      default:
        break;
    }
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { post, postComments, authedUser } = this.props;
    const { toHome, isEditing } = this.state;
    if (toHome) return <Redirect to="/" />;
    if (!post) return <PageNotFound />;
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
          authedUser={authedUser}
        />
        <CommentForm
          commentCallbackHandler={this.commentCallbackHandler}
          comment={this.state.body}
          isEditing={isEditing}
          handleCloseModal={this.handleCloseModal}
          modalIsOpen={this.state.modalIsOpen}
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
