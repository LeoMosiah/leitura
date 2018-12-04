import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Comment from "./Comment";
import { styles } from "./styles/postDetails";
import { withStyles } from "@material-ui/core";

function CommentsList(props) {
  const { classes, postComments, authedUser } = props;
  return (
    <React.Fragment>
      <Typography
        className={classes.commentsCard}
        variant="h6"
        component="h2"
      >{`Comments (${postComments.length}):`}</Typography>
      <div className={classes.commentsCard}>
        {postComments.length !== 0 &&
          postComments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              commentCallbackHandler={props.commentCallbackHandler}
              authedUser={authedUser}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(CommentsList);
