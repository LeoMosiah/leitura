import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import { withStyles } from "@material-ui/core";
import Post from "./Post";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Comment from "./Comment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  post: {
    margin: theme.spacing.unit * 3,
    border: "1px solid #ccc",
    width: 800,
    marginLeft: "auto",
    marginRight: "auto"
  },
  postHeader: {
    overflow: "auto",
    margin: theme.spacing.unit * 3
  },
  postHeaderAvatar: {
    float: "left",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  postHeaderDetails: {
    float: "left",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  postMain: {
    padding: theme.spacing.unit * 3.5,
    marginTop: -theme.spacing.unit * 4
  },
  commentsCard: {
    width: 800,
    marginLeft: "auto",
    marginRight: "auto"
  },
  commentsTitle: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  commentsForm: {
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    width: 400,
    fontSize: 18,
    letterSpacing: 5
  }
});

function PostDetails(props) {
  const { classes, post, postComments, handleChange } = props;

  return (
    <React.Fragment>
      <Card className={classes.post}>
        <div className={classes.postHeader}>
          <div className={classes.postHeaderAvatar}>
            <Avatar>{post.author[0].toUpperCase()}</Avatar>
          </div>
          <div className={classes.postHeaderDetails}>
            <Typography>{post.author}</Typography>
            <Typography>{post.timestamp}</Typography>
          </div>
        </div>
        <Card className={classes.postMain}>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography>{post.body}</Typography>
        </Card>
      </Card>
      <Typography
        className={classes.commentsCard}
        variant="h6"
        component="h2"
      >{`Comments (${postComments.length}):`}</Typography>
      <div className={classes.commentsCard}>
        {postComments.length !== 0 &&
          postComments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
      <div className={classes.commentsForm}>
        <TextField
          label="New Comment"
          placeholder="Write your comment"
          multiline
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={event => handleChange(event.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => console.log(props.text)}
        >
          Submit
        </Button>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(PostDetails);
