import React from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/postDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CommentForm(props) {
  const { classes, commentCallbackHandler, comment, isEditing } = props;
  return (
    <div className={classes.commentsForm}>
      <TextField
        label="New Comment"
        placeholder="Write your comment"
        multiline
        fullWidth
        className={classes.textField}
        value={comment}
        margin="normal"
        variant="outlined"
        onChange={event => commentCallbackHandler("change", event.target.value)}
      />
      <SubmitButton
        classes={classes}
        isEditing={isEditing}
        commentCallbackHandler={commentCallbackHandler}
        comment={comment}
      />
    </div>
  );
}

function SubmitButton(props) {
  const { isEditing, classes, commentCallbackHandler, comment } = props;
  if (isEditing) {
    return (
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => commentCallbackHandler("submit")}
        disabled={!comment}
      >
        Change
      </Button>
    );
  } else {
    return (
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => commentCallbackHandler("submit")}
        disabled={!comment}
      >
        Submit
      </Button>
    );
  }
}

export default withStyles(styles)(CommentForm);
