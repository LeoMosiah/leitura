import React, { Component } from "react";
import connect from "react-redux/src/connect/connect";
import Post from "./Post";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import { Avatar, Text, Heading } from "evergreen-ui";

class PostPage extends Component {
  render() {
    const { post } = this.props;
    return (
      <Pane
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={300}
        paddingRight={300}
      >
        <Pane display="inline-flex">
          <Avatar isSolid name={post.author} size={40} />
          <Pane marginLeft={10}>
            <Text color="muted" display="block">
              {post.author}
            </Text>
            <Text color="muted" display="block">
              {post.timestamp}
            </Text>
          </Pane>
          <h2>{post.title}</h2>
        </Pane>
      </Pane>
    );
  }
}

function mapStateToProps({ authedUser, posts }, props) {
  const { post_id } = props.match.params;
  const post = posts[post_id];
  return {
    authedUser,
    post
  };
}

export default connect(mapStateToProps)(PostPage);
