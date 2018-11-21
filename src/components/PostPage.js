import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import connect from "react-redux/src/connect/connect";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import { Avatar, IconButton, Paragraph } from "evergreen-ui";
import Comment from "./Comment";
import { timestampToDate } from "../utils/helper";
import { removePost } from "../actions/posts";
import { deletePost } from "../utils/api";

class PostPage extends Component {
  state = {
    toHome: false
  };
  async handleDelete(id) {
    await deletePost(id);

    this.props.dispatch(removePost(id));

    this.setState(() => ({
      toHome: true
    }));
  }
  render() {
    const { post, postComments } = this.props;
    const { toHome } = this.state;
    if (toHome) return <Redirect to="/" />;
    return (
      <Pane
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={270}
        paddingRight={270}
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
        <Pane overflow="hidden">
          <img
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max"
            alt="post image"
          />
        </Pane>
        <Pane marginTop={20}>
          <Paragraph>{post.body}</Paragraph>
          <IconButton
            icon="trash"
            intent="danger"
            apperence="minimal"
            onClick={() => this.handleDelete(post.id)}
          />
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
