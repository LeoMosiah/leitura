import React, { Component } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { deletePost } from "../utils/api";
import { removePost, reorderPosts } from "../actions/posts";

class Home extends Component {
  state = {
    descending: true
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
  render() {
    const { posts, categories, authedUser } = this.props;
    return (
      <div>
        <Header />
        <Main
          posts={posts}
          categories={categories}
          authedUser={authedUser}
          handleDelete={this.handleDelete}
          handleReorder={this.handleReorder}
          disposition={this.state.descending}
          params={this.props.match.params}
        />
        <Footer />
      </div>
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
