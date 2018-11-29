import React from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/postDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CommentForm(props) {
  const { classes, handleChange, commentCallbackHandler, comment } = props;
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
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => commentCallbackHandler("submit")}
        disabled={!comment}
      >
        Submit
      </Button>
    </div>
  );
}

export default withStyles(styles)(CommentForm);
