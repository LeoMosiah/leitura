import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ThumbsUpIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbsDownIcon from "@material-ui/icons/ThumbDownOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import * as PropTypes from "prop-types";
import { styles } from "./styles/postDetails";
import Header from "./Header";

function PostDetails(props) {
  const { classes, post, postCallbackHandler, authedUser } = props;
  return (
    <React.Fragment>
      <Header />
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
              onClick={() =>
                postCallbackHandler("vote", { post: post, option: "upVote" })
              }
            />
          </IconButton>
          <IconButton>
            <Badge badgeContent={post.voteScore} color="secondary" />
          </IconButton>
          <IconButton>
            <ThumbsDownIcon
              color="secondary"
              onClick={() =>
                postCallbackHandler("vote", { post: post, option: "downVote" })
              }
            />
          </IconButton>
          {authedUser === post.author && (
            <IconButton>
              <Link to={`/post/edit/${post.id}`}>
                <EditOutlinedIcon color="default" />
              </Link>
            </IconButton>
          )}
          {authedUser === post.author && (
            <IconButton>
              <DeleteForeverOutlinedIcon
                color="secondary"
                onClick={event => postCallbackHandler("delete", post.id)}
              />
            </IconButton>
          )}
        </CardActions>
      </Card>
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
