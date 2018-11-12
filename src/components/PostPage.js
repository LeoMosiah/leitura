import React, { Component } from "react";
import connect from "react-redux/src/connect/connect";
import Post from "./Post";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import { Avatar, Text, Heading, Paragraph } from "evergreen-ui";
import Comment from "./Comment";
import { timestampToDate } from "../utils/helper";

class PostPage extends Component {
  render() {
    const { post, postComments } = this.props;
    return (
      <Pane
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={300}
        paddingRight={300}
      >
        <Pane>
          <Pane clearfix>
            <Pane float="left">
              <Avatar isSolid name={post.author} size={40} />
            </Pane>
            <Pane marginLeft={10} float="left">
              <Paragraph textTransform="capitalize" color="muted">
                {post.author}
              </Paragraph>
              <Paragraph color="muted">
                {timestampToDate(post.timestamp)}
              </Paragraph>
            </Pane>
          </Pane>
          <h2>{post.title}</h2>
        </Pane>
        {postComments.length !== 0 &&
          postComments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </Pane>
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
