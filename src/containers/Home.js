import React, { Component } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { deletePost, votePost } from "../utils/api";
import { removePost, reorderPosts, togglePost } from "../actions/posts";
import { unsetAuthedUser } from "../actions/authedUser";

class Home extends Component {
  state = {
    descending: true,
    modalIsOpen: false
  };
  handleDelete = async (e, id) => {
    e.preventDefault();
    this.props.dispatch(removePost(id));
    await deletePost(id);
  };
  handleReorder = option => {
    this.props.dispatch(reorderPosts(this.props.posts, option));
    this.setState({
      descending: !this.state.descending
    });
  };
  handleVote = async (post, option) => {
    this.props.dispatch(togglePost(post, option));
    await votePost(post.id, option);
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handleSignOut = () => {
    this.props.dispatch(unsetAuthedUser());
  };
  render() {
    const { posts, categories, authedUser } = this.props;
    return (
      <React.Fragment>
        <Header
          handleOpenModal={this.handleOpenModal}
          authedUser={authedUser}
          handleSignOut={this.handleSignOut}
        />
        <Main
          posts={posts}
          categories={categories}
          authedUser={authedUser}
          handleDelete={this.handleDelete}
          handleReorder={this.handleReorder}
          disposition={this.state.descending}
          params={this.props.match.params}
          handleVote={this.handleVote}
          modalIsOpen={this.state.modalIsOpen}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ posts, categories, authedUser }) {
  return {
    posts,
    categories,
    authedUser
  };
}

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  authedUser: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};
