import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Comment from "./Comment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ThumbsUpIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbsDownIcon from "@material-ui/icons/ThumbDownOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import * as PropTypes from "prop-types";

const styles = theme => ({
  post: {
    margin: theme.spacing.unit * 3,
    border: "1px solid #ccc",
    width: 800,
    marginLeft: "auto",
    marginRight: "auto"
  },
  postHeader: {
    margin: theme.spacing.unit * 3,
    overflow: "hidden"
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
  const {
    classes,
    post,
    postComments,
    handleChange,
    handleSubmit,
    handleVotePost,
    authedUser
  } = props;
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
        <div className={classes.postMain}>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography>{post.body}</Typography>
        </div>
        <CardActions>
          <IconButton>
            <ThumbsUpIcon
              color="primary"
              onClick={() => handleVotePost(post, "upVote")}
            />
          </IconButton>
          <IconButton>
            <Badge badgeContent={post.voteScore} color="secondary" />
          </IconButton>
          <IconButton>
            <ThumbsDownIcon
              color="secondary"
              onClick={() => handleVotePost(post, "downVote")}
            />
          </IconButton>
          {authedUser === post.author && (
            <IconButton>
              <EditOutlinedIcon color="default" />
            </IconButton>
          )}
        </CardActions>
      </Card>
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
              handleDelete={props.handleDelete}
              handleVoteComment={props.handleVoteComment}
            />
          ))}
      </div>
      <div className={classes.commentsForm}>
        <TextField
          label="New Comment"
          placeholder="Write your comment"
          multiline
          fullWidth
          className={classes.textField}
          value={props.comment}
          margin="normal"
          variant="outlined"
          onChange={event => handleChange(event.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={event => handleSubmit(event)}
          disabled={!props.comment}
        >
          Submit
        </Button>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(PostDetails);

PostDetails.propTypes = {
  authedUser: PropTypes.any,
  classes: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleVoteComment: PropTypes.func.isRequired,
  handleVotePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  postComments: PropTypes.object.isRequired
};
