import React from "react";
import { Icon, Pane, Pill } from "evergreen-ui";
import { Link } from "react-router-dom";
import Heading from "evergreen-ui/esm/typography/src/Heading";
import Paragraph from "evergreen-ui/esm/typography/src/Paragraph";
import { timestampToDate } from "../utils/helper";

function Comment(props) {
  const { comment } = props;
  const upOrDown = score => (score > 0 ? "thumbs-up" : "thumbs-down");
  const blueOrRed = score => (score > 0 ? "blue" : "red");
  return (
    <Pane marginBottom={10} cursor="pointer" elevation={2} padding={10}>
      <Pane>
        <Heading fontWeight="bold" size={600}>
          {comment.title}
        </Heading>
        <Paragraph textTransform="capitalize" marginTop={10}>
          {comment.author}
        </Paragraph>
        <Paragraph marginBottom={5}>
          {timestampToDate(comment.timestamp)}
        </Paragraph>
        <Paragraph marginBottom={5}>{comment.body}</Paragraph>
      </Pane>
      <Pane display="flex">
        <Icon
          color={blueOrRed(comment.voteScore)}
          icon={upOrDown(comment.voteScore)}
          marginTop={8}
        />
        <Pill color={blueOrRed(comment.voteScore)}>{comment.voteScore}</Pill>
      </Pane>
    </Pane>
  );
}

export default Comment;
