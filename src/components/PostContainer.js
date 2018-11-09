import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

function PostContainer(props) {
  const { postIds } = props;
  return (
    <div>
      <ul>
        {postIds.map(id => (
          <li key={id}>
            <Post id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ posts }) {
  return {
    postIds: Object.keys(posts).sort(
      (a, b) => posts[b].timestamp - posts[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(PostContainer);
