import React, { Component } from "react";
import Paragraph from "evergreen-ui/esm/typography/src/Paragraph";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import Heading from "evergreen-ui/esm/typography/src/Heading";
import { Icon, Pill } from "evergreen-ui";

class Post extends Component {
  render() {
    const { post } = this.props;
    const upOrDown = score => (score > 0 ? "thumbs-up" : "thumbs-down");
    const blueOrRed = score => (score > 0 ? "blue" : "red");
    return (
      <Pane border="default" cursor="pointer" elevation={2} padding={10}>
        <Pane onClick={() => alert("Works just like expected")}>
          <Heading fontWeight="bold" size={600}>
            {post.title}
          </Heading>
          <Paragraph marginTop={10}>{post.author}</Paragraph>
          <Paragraph marginBottom={5}>{post.timestamp}</Paragraph>
        </Pane>
        <Pane display="flex">
          <Icon color="green" icon="comment" marginTop={8} />
          <Pill color="green">{post.commentCount}</Pill>
          <Icon
            color={blueOrRed(post.voteScore)}
            icon={upOrDown(post.voteScore)}
            marginTop={8}
          />
          <Pill color={blueOrRed(post.voteScore)}>{post.voteScore}</Pill>
        </Pane>
      </Pane>
    );
  }
}

export default Post;
