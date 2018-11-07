import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";

const byCategory = post => post.category === "redux";

class PostContainer extends Component {
  render() {
    const { posts, authedUser } = this.props;
    const category = "redux";
    return (
      <div>
        <ul>
          {Object.values(posts)
            .filter(byCategory)
            .map(post => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ posts, authedUser }) {
  return {
    authedUser,
    posts
  };
}

export default connect(mapStateToProps)(PostContainer);
