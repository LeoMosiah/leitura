import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import { withStyles } from "@material-ui/core";
import Post from "./Post";
import Avatar from "@material-ui/core/Avatar/Avatar";

const styles = theme => ({
  mainFeaturedPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 3,
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  postHeader: {
    overflow: "auto"
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
  }
});

function PostDetails(props) {
  const { classes, post } = props;
  return (
    <Paper gutterBottom className={classes.mainFeaturedPost}>
      <div className={classes.postHeader}>
        <div className={classes.postHeaderAvatar}>
          <Avatar>{post.author[0].toUpperCase()}</Avatar>
        </div>
        <div className={classes.postHeaderDetails}>
          <Typography>{post.author}</Typography>
          <Typography>{post.timestamp}</Typography>
        </div>
      </div>
      <Paper>
        <Typography component="h1" variant="h3" gutterBottom>
          {post.title}
        </Typography>
        <Typography>{post.body}</Typography>
      </Paper>
    </Paper>
  );
}

export default withStyles(styles)(PostDetails);
