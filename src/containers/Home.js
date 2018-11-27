import React, { Component } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { deletePost } from "../utils/api";
import { removePost } from "../actions/posts";

class Home extends Component {
  handleDelete = async id => {
    this.props.dispatch(removePost(id));
    await deletePost(id);
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
          hadleDelete={this.handleDelete}
        />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ posts, categories, authedUser }) {
  return {
    posts: Object.values(posts).sort((a, b) => b.timestamp - b.timestamp),
    categories,
    authedUser
  };
}

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  authedUser: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};
